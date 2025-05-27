# **Mandatory**
- Vs Code
- Node Js - v22.2.0 or greater
---
# **Deploying locally using vs code**

1. Open the folder in vs code.
2. next open the vs code terminal by clicking (...) above top left side.
3. Make sure the path is `PS C:\your_path\..\cuk-homepage>`
4. Then use command `cd frontend` to go inside frontend directory.
5. use command `npm init -y`.
6. Then use command `npm install` to install all the dependencies.
7. After completion of installation use command `npm run dev` to run the frontend server(locally).
8. You can see `http://localhost:5173/` in terminal click `ctrl + click` to open.
9. To stop in terminal press `ctrl + c`.
10. For backend similarly open new terminal.
11. If path is `PS C:\your_path\..\cuk-homepage>` then use command `cd backend` to change directory to backend.
12. Then use command `npm init -y`
13. Then use command `npm install` to install all dependencies in backend.
14. After installation use command `node server.js` to run backend.
---
## Note
- Backend and Frontend should run simultaniously.
- first run backend then take new terminal and run frontend.
---
## Error handling
- If you get any error similar to module not found then in terminal install the particular dependency using command `npm install module_name` ex:- `npm install express`, `npm install jsonwebtoken` .. etc.

---
## 🔧 Step-by-Step Deployment Guide on Plesk for Subdomain (`iqac.cuk.ac.in`)

### 🔹 Step 1: Prepare Your Project

#### Vue.js Frontend (Vite build)

```bash
cd your-vue-frontend
npm install
npm run build
```

This will create a `dist/` folder with static files.

#### Node.js Backend

Ensure your backend uses environment variables (like `.env`) and listens on a port (like 3000 or 8080).

---

### 🔹 Step 2: Create a Subdomain in Plesk

1. **Login to your Plesk dashboard**.
2. Go to **Websites & Domains**.
3. Click **"Add Subdomain"**.

   * **Subdomain name**: `iqac`
   * **Parent domain**: `cuk.ac.in`
   * **Document root**: Something like `iqac.cuk.ac.in` or `/httpdocs/iqac`

This will create a directory like: `/var/www/vhosts/cuk.ac.in/iqac.cuk.ac.in/httpdocs`

---

### 🔹 Step 3: Upload Vue Frontend

1. Go to **File Manager** in Plesk.
2. Navigate to the subdomain folder: `iqac.cuk.ac.in > httpdocs`
3. Upload the contents of your `dist/` folder (from `npm run build`) into this directory.

> ✅ You may need to delete the default `index.html` file before uploading.

---

### 🔹 Step 4: Setup Node.js Backend

1. In Plesk, go to **Node.js** (you’ll see it if your hosting supports it).
2. Select your subdomain (`iqac.cuk.ac.in`) → **Enable Node.js**.
3. Set the following:

   * **Application root**: Create a folder like `/httpdocs/backend`
   * Upload your **Node.js app** into this folder
   * **Application startup file**: usually `index.js` or `app.js`
   * **Document root**: keep it separate, like `/httpdocs` (for frontend)
4. Add your `.env` file with production values (e.g., DB credentials, port).
5. Use the **Terminal** or **SSH** from Plesk to install dependencies:

   ```bash
   cd /httpdocs/backend
   npm install
   ```

---

### 🔹 Step 5: Configure Reverse Proxy (Optional but Recommended)

If your backend runs on port `3000`, but you want `iqac.cuk.ac.in/api` to access it:

1. In Plesk, go to **Apache & nginx Settings** for your subdomain.

2. Add a **proxy rule** like:

   ```
   location /api/ {
     proxy_pass http://127.0.0.1:3000/;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_cache_bypass $http_upgrade;
   }
   ```

3. Restart services or use **Restart Node.js App** in Plesk.

---

### 🔹 Step 6: Configure MySQL

* Use Plesk's **Databases** tab to:

  * Create a new MySQL database
  * Create a user and assign it to the DB
* Add these credentials to your `.env` file in your Node.js backend.

---

### 🔹 Step 7: Test Everything

* Test `iqac.cuk.ac.in` → should load your Vue frontend.
* Test `/api` routes → should hit your backend (e.g., `iqac.cuk.ac.in/api/notices`)
* Make sure uploads, DB connections, and admin login all work.

---
## 🧠 Summary

| Part      | Tool          | Directory/File                      |
| --------- | ------------- | ----------------------------------- |
| Subdomain | Plesk         | `iqac.cuk.ac.in`                    |
| Frontend  | Vue.js        | Upload `dist/` to `/httpdocs`       |
| Backend   | Node.js       | `/httpdocs/backend` with `app.js`   |
| Database  | MySQL         | Create via Plesk, connect in `.env` |
| API Proxy | nginx/Apache  | Reverse proxy `/api` to port `3000` |
| SSL       | Let’s Encrypt | Enable via Plesk UI                 |

---
