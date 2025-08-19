### mern-crash-course

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for a simple product store.

---

### Technologies Used 💻

* **Frontend**: React, Chakra UI, Vite
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Deployment**: Render.com

---

### Setup and Running Locally

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/KhongCL/mern-crash-course.git
    cd mern-crash-course
    ```

2.  **Setup Environment Variables**

    Create a `.env` file in the root directory and add your MongoDB connection string and a port number.

    ```ini
    MONGO_URI=your_mongo_uri
    PORT=5000
    ```

3.  **Install Dependencies and Build**

    Run the build script to install all dependencies for both the backend and frontend.

    ```bash
    npm run build
    ```

4.  **Start the Application**

    Start the server and the production build of the frontend.

    ```bash
    npm run start
    ```

This will start the application, and you should be able to access it in your web browser at `http://localhost:5000`.
