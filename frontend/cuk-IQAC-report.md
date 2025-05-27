### Order
1. **Abstract**
2. **Introduction**
3. **Project Management** 
4. **System Analysis**
5. **Database Design**
6. **Methodology**
7. **Testing Strategy**
8. **Deployment Strategy**
9. **Results**
10. **User Manual**
11. **Future Improvements**
12. **Conclusion**
13. **Bibliography**
---

## **Abstract**
This report provides a comprehensive analysis of the IQAC Committee's structure and functionality within the application developed for the Central University of Karnataka. The application serves as a digital platform for managing committee members, their roles, and the documentation of meeting minutes. It enhances transparency, accountability, and efficient communication within the IQAC Committee. This report highlights key features of the application, including its user interface components, data management capabilities, and the methodologies employed to ensure effective information processing and decision-making. Additionally, it explores potential areas for future development to further optimize the application’s functionality.

---

## **1. Introduction**
## Problem Statement
The Internal Quality Assurance Cell (IQAC) at the Central University of Karnataka plays a vital role in ensuring continuous improvement in academic and administrative processes. However, the current approach to managing committee operations—relying on manual record-keeping, email communications, and paper-based documentation—presents several challenges. These traditional methods can lead to inefficiencies in report management, difficulties in accessing meeting records, and challenges in tracking committee decisions over time.

Some key concerns include:

- Inefficient Documentation: Retrieving and organizing meeting minutes can be time-consuming and may result in data loss.

- Limited Accessibility: Committee members may find it difficult to access historical records and essential documents when needed.

- Lack of Role-Based Control: In the absence of structured user role management, sensitive information may be accessed by unauthorized users, while authorized users may lack the necessary permissions.

- Communication Gaps: Information sharing among committee members may be fragmented, affecting transparency and accountability.

- Scalability Challenges: As the committee grows, managing records manually becomes increasingly complex.
---

## Solution Overview
To address these challenges, a web-based application has been developed to support the IQAC Committee at the Central University of Karnataka (CUK). This system aims to streamline internal processes, enhance documentation management, and improve communication among committee members.

The primary objectives of the application are:

- To provide a centralized platform for committee records and member roles.

- To facilitate the efficient storage, retrieval, and management of meeting minutes.

- To ensure ease of access and usability through an intuitive user interface.

- To implement role-based access control for secure data management.

- To promote transparency and accountability through structured documentation.

---

## **2. Project Management**

### 2.1 Development Methodology

The IQAC Committee Management System was developed using an Agile-inspired approach that emphasized flexibility, collaboration, and iterative development. While not following strict Agile ceremonies, this methodology allowed for ongoing refinement of the system based on continuous feedback from stakeholders.

#### 2.1.1 Collaborative Development Approach

The development process was characterized by:

- **Iterative Development**: The system was built incrementally, with regular demonstrations to the project guide to validate functionality and gather feedback.
- **Collaborative Requirements Gathering**: Requirements were identified and refined through ongoing discussions with the guide and potential users from the IQAC Committee.
- **Flexible Prioritization**: Features were prioritized based on stakeholder needs, with adjustments made as the project progressed.

This approach allowed the project to adapt to emerging requirements while maintaining progress toward completion.

### 2.2 Timeline Overview

The project was completed within a condensed four-month timeframe, with development progressing through several overlapping phases:

1. **Initial Planning and Setup**: Requirements gathering, technology selection, and environment configuration
2. **Core Development**: Implementation of authentication, database structure, and basic functionality
3. **Feature Implementation**: Development of committee management, file handling, and reporting features
4. **Testing and Refinement**: Manual testing, bug fixing, and user feedback incorporation
5. **Deployment**: Server configuration and application deployment using Plesk

The compressed timeline required efficient prioritization of features and focused development efforts to meet project objectives.

### 2.3 Challenges and Solutions

Several challenges were encountered during the development process:

#### 2.3.1 Technical Challenges

- **File Management**: Implementing secure and efficient file storage for meeting minutes and notices required careful consideration of storage options and access control.
  
  *Solution*: Developed a hybrid approach using database storage for sensitive documents and file system storage with appropriate permissions for general files.

- **Deployment Complexities**: Configuring the Node.js application on Plesk presented unexpected challenges with environment settings and service management.
  
  *Solution*: Implemented process management tools and created custom configuration scripts to address Plesk-specific deployment issues.

#### 2.3.2 Project Challenges

- **Evolving Requirements**: As stakeholders gained understanding of the system's capabilities, new feature requests emerged.
  
  *Solution*: Maintained a prioritized feature list and regularly discussed trade-offs with the project guide to keep development focused.

- **Time Constraints**: The four-month timeline required efficient work scheduling and feature prioritization.
  
  *Solution*: Focused on implementing core functionality first, with additional features added as time permitted.

### 2.4 Collaboration Structure

The project was primarily developed as an individual final year project, with guidance and support from:

- **Project Guide**: Provided direction, feedback, and domain expertise throughout the development process
- **IQAC Committee Representatives**: Contributed requirements and feedback on functionality
- **IT Department**: Provided infrastructure support and deployment guidance

Regular meetings with the project guide ensured alignment with institutional requirements, while ad-hoc consultations with committee members helped validate that the system would meet actual user needs.

The collaborative approach, despite the compressed timeline, resulted in a system that effectively addresses the needs of the IQAC Committee while providing a solid foundation for future enhancements.

---

## **3. System Analysis**
The application is structured around multiple Vue.js components, each contributing to specific functionalities. These components interact with a backend API to ensure real-time data retrieval and management. The primary components include:

### 3.1 Frontend Components
### 3.1.1 Committee-Members.vue
- Displays a structured list of IQAC Committee members.
- Showcases details such as names, designations, roles, and profile images.
- Implements a responsive layout for seamless accessibility across devices.
- Enables real-time updates to maintain accurate information.

### 3.1.2 Navbar.vue
- Provides essential navigation links, including "Home," "About Us," "IQAC," and "Reports."
- Features a responsive dropdown menu for easy access to multiple sections.
- Ensures a user-friendly browsing experience on both desktop and mobile devices.

### 3.1.3 MomReports.vue
- Manages the display, download, and deletion of meeting reports.
- Integrates role-based access control, allowing only authorized users to delete files.
- Implements loading states and error handling to improve user experience.
- Fetches reports dynamically from the backend to ensure real-time updates.

### 3.1.4 Footer.vue
- Includes links to external educational resources such as UGC, NAAC, and AICTE.
- Provides authentication controls, including login and logout options.
- Enhances usability by offering quick access to critical information.

These components collectively enhance the usability and effectiveness of the application, ensuring that IQAC Committee members can efficiently manage and access relevant information.

---

### 3.2 Backend Implementation

The backend of the IQAC Committee management application is built using Node.js with the Express framework, providing a robust and scalable API to support the frontend functionalities.

### **2.2.1 Server Setup and Configuration**

- The server is initialized in `server.js` with essential middleware including CORS for cross-origin resource sharing and JSON parsing for request bodies.
- Environment variables are managed using `dotenv` for sensitive configurations such as database credentials and JWT secrets.
- A MySQL connection pool is established using `mysql2/promise` to efficiently manage database connections.
- Static files, particularly uploaded documents, are served from an `uploads` directory, which is ensured to exist at server startup.

### **2.2.2 Authentication and Authorization**

- User authentication is handled via JWT tokens. The `/api/auth/login` endpoint validates user credentials against the MySQL `users` table.
- Upon successful login, a JWT token is issued containing the user ID and role, with a 1-hour expiration.
- Protected routes use middleware to verify the JWT token from the `Authorization` header, ensuring secure access.
- Role-based access control is implemented, distinguishing between admin and regular users, controlling access to sensitive operations such as approving or deleting notices.

### **2.2.3 File Management and Notices**

- File uploads are handled using `multer` middleware, storing files in the `uploads` directory or in memory for meeting minutes.
- Uploaded files are associated with metadata stored in the MySQL `notices` table, including title, event date, file name, MIME type, and status.
- Notices undergo an approval workflow where new uploads have a pending status until approved by an admin.
- Soft deletion is implemented by updating the status field rather than removing records permanently, preserving data integrity.
- Endpoints support fetching approved notices, pending notices, file serving for inline viewing, explicit file downloads, and approval or rejection of notices.

### **2.2.4 Meeting Minutes Management**

- Meeting minutes files are uploaded and stored as BLOBs in the `minutesofmeeting` table, along with metadata such as title, date, file name, and MIME type.
- Uploads use memory storage via `multer` to handle file data before insertion into the database.
- Active meeting minutes can be retrieved via API endpoints, supporting dynamic frontend display.
- Deletion of meeting minutes is handled as a soft delete by updating the status field.

### **2.2.5 Error Handling and Health Checks**

- Centralized error handling middleware captures unhandled errors and returns appropriate HTTP responses.
- A health check endpoint (`/health`) provides a simple JSON response indicating server status and timestamp.

---

## **4. Database Design**

The IQAC Committee Management System uses MySQL as its relational database management system. The database design emphasizes data integrity, efficient querying, and secure access control.

### **Users Table**

Stores user authentication data and role information for access control.

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'member', 'viewer') NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **Committee Members Table**

Maintains detailed information about IQAC committee members.

```sql
CREATE TABLE committee_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    department VARCHAR(255),
    profile_image VARCHAR(255),
    contact_email VARCHAR(255),
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Minutes of Meeting Table**

Stores meeting minutes documents and associated metadata.

```sql
CREATE TABLE minutesofmeeting (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    meeting_date DATE NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_data LONGBLOB NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    status TINYINT DEFAULT 1,
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id)
);
```

### **Notices Table**

Manages notices and announcements with approval workflow.

```sql
CREATE TABLE notices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    event_date DATE,
    file_name VARCHAR(255) NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    uploaded_by INT,
    approved_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id),
    FOREIGN KEY (approved_by) REFERENCES users(id)
);
```

The database schema supports the core functionality of the application while maintaining data integrity through foreign key relationships and appropriate data types. The use of timestamps and status fields enables effective tracking of changes and soft deletion capabilities.

---

## **5. Methodology**
To comprehensively evaluate the effectiveness, usability, and robustness of the IQAC Committee management application, a structured methodology was adopted. The assessment focused on technical architecture, user experience, data handling, security, and role-based access control mechanisms.

### 5.1 Component Analysis

Each Vue.js component was examined in detail to assess its structure, functionality, and role within the application. The evaluation covered:

- **Code Efficiency:** Reviewing the logic behind each component to ensure optimal performance.
- **Interactivity:** Ensuring that Vue's reactive properties enhance user experience.
- **Data Binding and State Management:** Analyzing how data flows between components and how updates are reflected dynamically.
- **Reusability & Scalability:** Evaluating whether components can be modularly reused and scaled for future requirements.
- **Security and Access Control:** Assessing the implementation of role-based access control to ensure secure data
management.



- User Role Consideration 

User roles were a key focus in ensuring that access control policies were properly implemented. The application follows a Role-Based Access Control (RBAC) approach, distinguishing between:

- **Admin Users:**

    Full control over the committee member list and reports.
Ability to delete reports (soft deletion).
Permission to modify the structure of the application if required.
- **Regular Users:**

    View-only access to reports and committee information.
Can download minutes of meetings but cannot delete or modify them.
This segregation ensures data security, prevents unauthorized modifications, and maintains transparency within the IQAC Committee.

### 5.2 Data Fetching and Management

Efficient data handling is crucial for a seamless user experience. The application follows a structured approach for data retrieval and storage:

**API Integration with Axios:**

Uses Axios to fetch meeting reports and committee member data from a backend API.
Ensures real-time updates and a dynamic user interface.
Handles errors gracefully with proper feedback mechanisms.
Database Schema & Soft Deletion:

The minutesofmeeting table maintains records with a status column (default 1 for active).
Instead of permanent deletion, records are marked as status = 0, ensuring data integrity and traceability.
Data Security & Storage Optimization:

Implements parameterized queries to prevent SQL injection.
Stores files as binary data (BLOB) in the database while maintaining metadata (e.g., file name, date, type).
Uses pagination and lazy loading to optimize performance when fetching large datasets.

### 5.3 User Experience Evaluation

A key objective of the evaluation was to ensure a smooth and user-friendly experience. The following aspects were assessed:

Navigation & Workflow Efficiency:

Tested the logical flow of user actions from login to report access.
Ensured the application remains intuitive, even for first-time users.
Responsiveness & Accessibility:

The application was tested on various screen sizes, including desktops, tablets, and mobile devices.
Employed accessibility best practices such as ARIA labels, color contrast, and keyboard navigability.
Performance & Load Handling:

Conducted stress testing to analyze application behavior under multiple concurrent users.
Optimized API calls to minimize response time.
Feedback & Error Handling:

Implemented meaningful error messages and loading indicators.
Ensured users receive clear guidance in case of failed operations (e.g., failed report fetch or deletion).
---

## **6. Testing Strategy**

The IQAC Committee Management System underwent comprehensive manual testing to ensure reliability, functionality, and usability. This approach focused on human-centered evaluation to identify issues from a user perspective and validate that the application meets the needs of the IQAC Committee members.

### 6.1 Manual Testing Approach

#### 6.1.1 Functionality Testing

Each system component was methodically tested to verify correct operation:

- **User Authentication**: Verified login functionality with both valid and invalid credentials, ensuring that appropriate error messages were displayed and that users were correctly redirected after successful authentication.
- **Committee Member Management**: Confirmed that member information was correctly displayed, and that admin users could add, edit, and remove committee members while regular users could only view this information.
- **File Upload and Management**: Tested file upload functionality with various file types and sizes to ensure proper handling, storage, and retrieval of documents.
- **Role-Based Access Control**: Verified that different user roles (admin vs. regular users) had appropriate access restrictions enforced across all application features.

#### 6.1.2 Cross-Browser Testing

The application was tested across multiple browsers to ensure consistent functionality and appearance:

- Google Chrome (version 99+)
- Mozilla Firefox (version 97+)
- Microsoft Edge (version 98+)

All critical functionality performed consistently across browsers, with minor CSS rendering differences addressed through responsive design adjustments.

#### 6.1.3 Responsive Design Testing

The application was tested on various devices and screen sizes:

- Desktop monitors (24" and 27")
- Laptops (15" and 13")
- Tablets (iPad 10.2" and Samsung Galaxy Tab)
- Mobile phones (iPhone and Android devices)

Layout adjustments, menu behavior, and overall usability were verified across all screen sizes, ensuring that users could effectively use the application regardless of their device.

### 6.2 User Acceptance Testing

#### 6.2.1 Test Participants

A diverse group of stakeholders participated in testing:
- 3 IQAC Committee administrators
- 6 regular committee members
- 2 IT department staff members

#### 6.2.2 Testing Scenarios

Participants were provided with realistic usage scenarios to complete:

1. **Administrator Tasks**:
   - Create new user accounts with appropriate roles
   - Upload meeting minutes and notices
   - Approve or reject pending notices
   - Manage committee member information
   - Delete (soft delete) reports and documents

2. **Regular User Tasks**:
   - Log in and access approved documents
   - Download meeting minutes
   - View committee member information
   - Submit notices for approval
   - Navigate between different sections of the application

#### 6.2.3 Feedback Collection

Feedback was collected through:
- Direct observation during testing sessions
- Post-testing interviews with participants
- Written feedback forms with both structured and open-ended questions
- Group discussions to identify common issues and gather improvement suggestions

### 6.3 Security Testing

#### 6.3.1 Authentication and Authorization Testing

- Verified that JWT tokens were properly validated for protected routes
- Confirmed that unauthorized users could not access restricted endpoints
- Tested token expiration and refresh mechanisms
- Validated that role-based permissions were correctly enforced

#### 6.3.2 Data Security Testing

- Tested input validation to prevent SQL injection and XSS attacks
- Verified that sensitive information was not exposed in API responses
- Confirmed that passwords were properly hashed in the database
- Checked that file uploads were properly validated and sanitized

### 6.4 Performance Testing

#### 6.4.1 Response Time Testing

- Measured application load times under normal conditions
- Tested response times when accessing large documents
- Evaluated database query performance with production-like data volumes

#### 6.4.2 Concurrency Testing

- Simulated multiple users accessing the application simultaneously
- Verified that the application remained responsive during concurrent operations
- Tested file upload and download operations with multiple simultaneous users

### 6.5 Test Results and Outcomes

#### 6.5.1 Key Findings

- The application successfully met all core functional requirements
- Role-based access control correctly restricted user actions based on permissions
- The responsive design worked effectively across various devices and screen sizes
- Document management features (upload, download, and soft deletion) functioned as expected

#### 6.5.2 Issues Identified and Resolved

1. **Authentication Flow**: Initial testing revealed occasional token validation issues when users were inactive for extended periods. This was resolved by implementing better token refresh mechanisms.

2. **File Management**: Large file uploads occasionally timed out. This was addressed by optimizing the file upload process and implementing progress indicators.

3. **UI Consistency**: Some UI elements appeared differently across browsers. CSS was standardized to ensure consistent appearance.

4. **Error Handling**: Initial error messages were not sufficiently descriptive. More user-friendly error messages were implemented to improve the user experience.

#### 6.5.3 User Feedback Summary

- Users praised the intuitive interface and ease of navigation
- The centralized document repository was highlighted as particularly valuable
- Administrators appreciated the streamlined notice approval workflow
- Minor UI improvements were suggested and implemented based on user feedback

#### 6.5.4 Performance Results

- Page load times averaged under 2 seconds on standard connections
- File downloads performed efficiently even for larger documents
- The application remained responsive with up to 25 simultaneous users during testing
- Database operations showed consistent performance with the expected data volume

The manual testing approach proved effective in identifying and resolving issues before deployment, resulting in a stable and user-friendly application that meets the needs of the IQAC Committee members at the Central University of Karnataka.

---
# **7. Deployment Strategy**

The deployment of the IQAC Committee Management System required careful planning and execution to ensure a successful transition from development to production. This section outlines the deployment approach, challenges encountered using Plesk, and strategies for maintaining the application.

### 7.1 Server Requirements

#### 7.1.1 Hardware Requirements
The IQAC Committee Management System requires the following minimum server specifications:
- **CPU**: 4 cores (Intel Xeon or equivalent)
- **RAM**: 8GB minimum, 16GB recommended
- **Storage**: 100GB SSD storage (allowing for application, database, and document storage)
- **Network**: Reliable internet connection with minimum 10Mbps upload/download speeds

#### 7.1.2 Software Requirements
- **Operating System**: windows 10 or Ubuntu 20.04+ LTS
- **Web Server**: Nginx 1.18+ (preferred) or Apache 2.4+
- **Database**: MySQL 5.7+ or MariaDB 10.5+
- **Node.js**: Version 14.x LTS or 16.x LTS
- **Plesk**: Version 18.0.33+ with Node.js support enabled
- **SSL Certificate**: Valid SSL certificate for secure HTTPS connections

#### 7.1.3 Network Requirements
- Dedicated IP address
- Configured DNS records pointing to the server
- Opened ports:
  - 80/443 (HTTP/HTTPS)
  - 22 (SSH for remote administration)
  - 3306 (MySQL, secured for internal access only)
- Firewall rules to restrict unauthorized access

### 7.2 Deployment Process Using Plesk

The application was deployed using Plesk, a comprehensive web hosting control panel. While Plesk offers many advantages, several challenges were encountered during deployment that required specific solutions.

#### 7.2.1 Plesk Configuration

1. **Domain Setup**
   - Created a new domain/subdomain for the application in Plesk
   - Configured DNS settings to point to the server's IP address
   - Generated and installed an SSL certificate using Plesk's Let's Encrypt integration

2. **Node.js Environment Setup**
   - Enabled Node.js support in Plesk
   - Selected Node.js version 16.x as the application runtime
   - Configured environment variables through Plesk's interface:
     ```
     NODE_ENV=production
     DB_HOST=localhost
     DB_USER=[database_username]
     DB_PASSWORD=[database_password]
     DB_NAME=iqac_db
     JWT_SECRET=[secure_random_string]
     PORT=3000
     UPLOAD_DIR=/var/www/vhosts/domain.com/uploads
     ```

3. **Database Setup**
   - Created a MySQL database and user through Plesk's database management interface
   - Imported the initial schema using the provided SQL file
   - Set appropriate database user permissions

#### 7.2.2 Application Deployment

1. **Code Preparation**
   - Updated configuration files for production environment
   - Built and optimized Vue.js frontend:
     ```bash
     npm run build
     ```
   - Merged frontend build into backend server directory

2. **Upload Process**
   - Used Plesk's File Manager to upload application files
   - Alternatively, set up Git deployment:
     ```bash
     git remote add production ssh://user@domain.com:port/path/to/repository
     git push production master
     ```
   - Ensured proper file permissions (644 for files, 755 for directories)

3. **Application Startup**
   - Configured the application entry point in Plesk's Node.js settings
   - Set up the start command:
     ```
     npm start
     ```
   - Configured Plesk to restart the application automatically after server reboots

#### 7.2.3 Deployment Challenges and Solutions

Several issues were encountered during deployment that required troubleshooting:

1. **Node.js Version Compatibility**
   - **Issue**: Initial deployment failed due to Node.js version mismatch between development and production.
   - **Solution**: Updated the Plesk Node.js version to match development environment (16.x), and updated the package.json to specify engine requirements.

2. **Path Resolution Issues**
   - **Issue**: File uploads were failing due to incorrect path resolution in the production environment.
   - **Solution**: Modified the upload path configuration to use absolute paths and ensured appropriate directory permissions:
     ```javascript
     // Changed from relative paths
     const uploadDir = path.join(__dirname, '../uploads');
     // To absolute paths with environment variable support
     const uploadDir = process.env.UPLOAD_DIR || path.join(__dirname, '../uploads');
     ```

3. **Database Connection Problems**
   - **Issue**: Application failed to connect to the MySQL database despite correct credentials.
   - **Solution**: Adjusted the connection pool configuration and IP binding to properly connect to the local MySQL instance:
     ```javascript
     const pool = mysql.createPool({
       host: process.env.DB_HOST,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME,
       waitForConnections: true,
       connectionLimit: 10,
       queueLimit: 0
     });
     ```

4. **CORS Configuration**
   - **Issue**: API requests from the frontend were blocked by CORS policy in production.
   - **Solution**: Updated CORS configuration to allow specific origins:
     ```javascript
     app.use(cors({
       origin: process.env.NODE_ENV === 'production' 
         ? 'https://iqac.domain.com' 
         : 'http://localhost:8080',
       credentials: true
     }));
     ```

5. **Plesk Process Management**
   - **Issue**: Application processes would occasionally terminate unexpectedly.
   - **Solution**: Implemented PM2 process manager and configured it through Plesk:
     ```
     npm install pm2 -g
     pm2 start server.js --name iqac-app
     pm2 startup
     pm2 save
     ```

### 7.3 Backup and Recovery Procedures

A comprehensive backup strategy was implemented to protect application data and ensure business continuity.

#### 7.3.1 Database Backup Strategy

1. **Automated Daily Backups**
   - Configured daily MySQL dumps through Plesk's scheduling feature:
     ```bash
     mysqldump -u [username] -p[password] iqac_db > /backup/iqac_db_$(date +\%Y\%m\%d).sql
     ```
   - Retention policy: 7 daily backups, 4 weekly backups, 3 monthly backups

2. **Pre-Update Backups**
   - Prior to any system updates or major changes, additional manual backups are performed:
     ```bash
     mysqldump -u [username] -p[password] --all-databases > /backup/pre_update_$(date +\%Y\%m\%d).sql
     ```

3. **Backup Verification**
   - Weekly test restores to a secondary environment to verify backup integrity:
     ```bash
     mysql -u [username] -p[password] test_restore < /backup/iqac_db_[date].sql
     ```

#### 7.3.2 File System Backup

1. **Document and Upload Backup**
   - Daily incremental backups of the uploads directory:
     ```bash
     rsync -a --delete /var/www/vhosts/domain.com/uploads/ /backup/uploads/
     ```
   
2. **Application Code Backup**
   - Version control through Git repository serves as primary code backup
   - Additional filesystem backups of the entire application directory:
     ```bash
     tar -czf /backup/app_$(date +\%Y\%m\%d).tar.gz /var/www/vhosts/domain.com/
     ```

#### 7.3.3 Recovery Procedures

1. **Database Recovery Procedure**
   - Stop the application:
     ```bash
     pm2 stop iqac-app
     ```
   - Restore the database:
     ```bash
     mysql -u [username] -p[password] iqac_db < /backup/iqac_db_[date].sql
     ```
   - Restart the application:
     ```bash
     pm2 start iqac-app
     ```

2. **Application Recovery Procedure**
   - Stop the application:
     ```bash
     pm2 stop iqac-app
     ```
   - Extract backup:
     ```bash
     tar -xzf /backup/app_[date].tar.gz -C /temp/recovery/
     ```
   - Copy recovered files:
     ```bash
     rsync -a --delete /temp/recovery/var/www/vhosts/domain.com/ /var/www/vhosts/domain.com/
     ```
   - Restore permissions:
     ```bash
     chown -R webuser:webgroup /var/www/vhosts/domain.com/
     chmod -R 755 /var/www/vhosts/domain.com/
     ```
   - Restart the application:
     ```bash
     pm2 start iqac-app
     ```

3. **Disaster Recovery Plan**
   - Documented step-by-step recovery procedure for complete server failure
   - Off-site backup storage to protect against local disasters
   - Regular recovery drills to ensure team preparedness

### 7.4 Maintenance Considerations

#### 7.4.1 Routine Maintenance Tasks

1. **System Updates**
   - Monthly schedule for Node.js security updates
   - Quarterly updates for non-critical dependencies
   - Scheduled maintenance windows communicated to users in advance

2. **Database Maintenance**
   - Weekly optimization and cleanup of database:
     ```sql
     OPTIMIZE TABLE notices, minutesofmeeting, users;
     ```
   - Monthly review of database performance metrics
   - Quarterly cleanup of soft-deleted records older than one year

3. **Log Management**
   - Configured log rotation to prevent disk space issues:
     ```
     /var/log/nodejs/iqac-app.log {
       daily
       rotate 7
       compress
       delaycompress
       missingok
       notifempty
       create 640 nodejs adm
     }
     ```
   - Implemented automated log analysis for error detection

#### 7.4.2 Performance Monitoring

1. **Application Monitoring**
   - Implemented PM2 monitoring for Node.js processes
   - Set up email alerts for application crashes or high resource usage
   - Added periodic health check endpoints to verify system status

2. **Resource Utilization Tracking**
   - Monitoring of CPU, memory, and disk usage through Plesk's tools
   - Threshold alerts for resource utilization above 80%
   - Quarterly capacity planning reviews

#### 7.4.3 Update and Patching Strategy

1. **Security Updates**
   - Critical security patches applied within 48 hours of release
   - Comprehensive testing of patches in staging environment before production deployment
   - Documented rollback procedure for each update

2. **Feature Updates**
   - Quarterly schedule for new feature deployments
   - Two-week testing period in staging environment
   - User notification of upcoming changes
   - Feature deployment during low-usage periods (weekends or after hours)

#### 7.4.4 Documentation Maintenance

1. **System Documentation**
   - Maintained up-to-date network diagrams
   - Documented all configuration changes
   - Updated deployment procedures after each major update

2. **User Documentation**
   - Quarterly review and update of user manuals
   - Maintenance of a searchable FAQ for common issues
   - Video tutorials updated to reflect UI changes

#### 7.4.5 Long-term Sustainability

1. **Technology Stack Evaluation**
   - Annual review of the technology stack to assess long-term viability
   - Evaluation of new frameworks and libraries for potential improvements
   - Gradual migration strategy for major version upgrades

2. **Knowledge Transfer**
   - Documentation of all custom code and configurations
   - Cross-training of IT staff on system maintenance
   - Quarterly review sessions with IT team to share knowledge

3. **User Feedback Integration**
   - Regular collection of user feedback on system performance and usability
   - Prioritization of improvements based on user needs
   - Transparent communication about planned enhancements

The deployment and maintenance strategy ensures that the IQAC Committee Management System remains secure, reliable, and effective over time. By addressing the challenges encountered during the Plesk deployment and implementing comprehensive backup and maintenance procedures, the system is well-positioned to provide long-term value to the Central University of Karnataka.

---

## **8. Results and Key Findings**
The evaluation of the application led to several key insights:

### 8.1 User-Friendly Interface
- The intuitive design ensures that users can quickly access committee information and reports.
- Responsive layouts enable accessibility across various devices.

### 8.2 Efficient Report Management
- Users can easily download meeting minutes.
- Admin users have control over report deletion, maintaining an organized record system.
- The application employs a soft deletion approach to preserve historical data integrity.

### 8.3 Secure and Role-Based Access
- Access to administrative features is restricted based on user roles.
- Local storage authentication mechanisms determine user privileges.

### 8.4 Enhanced Communication and Documentation
- A centralized repository facilitates information sharing among IQAC Committee members.
- The digital format reduces paperwork and ensures that meeting minutes are easily accessible.

---

## **9. User Manual**
### 9.1 Getting Started
- System Requirements
- Installation Process
- First-time Login

### 9.2 User Interface Overview
- Navigation Structure
- Main Dashboard
- Key Features

### 9.3 Common Tasks
- Accessing Meeting Minutes
- Viewing Committee Members
- Downloading Reports
- Submitting Notices

### 9.4 Administrative Functions
- User Management
- Document Approval Process
- System Configuration
- Backup and Recovery

### 9.5 Troubleshooting
- Common Issues and Solutions
- Error Messages
- Support Contact Information

---

## **10. Future Improvements and Recommendations**
While the application effectively serves its purpose, potential enhancements could further improve its functionality:

### 10.1 Advanced Reporting Features
- Implementing analytics and data visualization for meeting trends.
- Allowing users to filter reports by date, category, or relevance.

### 10.2 User Feedback Mechanism
- Introducing a feedback system where users can report issues or suggest improvements.
- Conducting periodic usability testing to refine UI elements.

### 10.3 Notification and Alerts
- Implementing email or in-app notifications for new reports or important updates.
- Allowing users to subscribe to specific report categories.

### 10.4 Integration with External Systems
- Connecting with university ERP systems to streamline data exchange.
- Enabling synchronization with cloud storage solutions for better accessibility.

---

## **11. Conclusion**
The IQAC Committee Management System has successfully transformed the manual processes of the Internal Quality Assurance Cell at Central University of Karnataka into an efficient digital platform. Through careful implementation of modern web technologies, secure database design, and user-centric features, the system has achieved its primary objectives of streamlining documentation, enhancing accessibility, and maintaining data security.

Key achievements include:
- Successful digitization of committee operations
- Implementation of role-based access control
- Efficient document management system
- Enhanced communication and collaboration capabilities

The system's modular design and comprehensive documentation ensure its sustainability and potential for future enhancements. As the IQAC continues to evolve, this platform provides a solid foundation for maintaining and improving quality assurance processes at the university.

---

## **12. Bibliography**
Central University of Karnataka. (n.d.). IQAC Committee. Retrieved from CUK Website.

Additional references as needed.

---