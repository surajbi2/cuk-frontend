import db from '../config/db.js';
import path from 'path';
import fs from 'fs';

export const uploadSurvey = async (req, res) => {
    try {
        // Check if user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Admin access required' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const { title, year } = req.body;
        
        if (!title || !year) {
            return res.status(400).json({ message: 'Title and year are required' });
        }

        // Insert survey record into database
        const [result] = await db.query(
            'INSERT INTO surveys (title, year, file_path, upload_date) VALUES (?, ?, ?, NOW())',
            [title, year, req.file.filename]
        );

        res.status(201).json({ 
            message: 'Survey uploaded successfully',
            id: result.insertId
        });

    } catch (error) {
        console.error('Error uploading survey:', error);
        res.status(500).json({ message: 'Error uploading survey' });
    }
};

export const getAllSurveys = async (req, res) => {
    try {
        const [surveys] = await db.query(
            'SELECT id, title, year, upload_date FROM surveys WHERE status = 1 ORDER BY year DESC'
        );

        // Format surveys for frontend
        const formattedSurveys = surveys.map(survey => ({
            type: 'SSS',
            year: survey.year,
            description: survey.title,
            link: `/api/surveys/download/${survey.id}`,
            uploadDate: survey.upload_date
        }));

        res.json(formattedSurveys);

    } catch (error) {
        console.error('Error fetching surveys:', error);
        res.status(500).json({ message: 'Error fetching surveys' });
    }
};

export const downloadSurvey = async (req, res) => {
    try {
        const { id } = req.params;

        // Get survey file info from database
        const [surveys] = await db.query(
            'SELECT title, file_path FROM surveys WHERE id = ? AND status = 1',
            [id]
        );

        if (surveys.length === 0) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        const survey = surveys[0];
        const filePath = path.join(process.cwd(), 'uploads', survey.file_path);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Set filename for download
        const fileName = `${survey.title}.pdf`;
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/pdf');

        // Stream file to response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

    } catch (error) {
        console.error('Error downloading survey:', error);
        res.status(500).json({ message: 'Error downloading survey' });
    }
};
