
# **Learning Management System (LMS)**  

A modern **Learning Management System (LMS)** built with **React.js, Zustand, Tailwind CSS, and JSON Server** for managing course enrollments, progress tracking, and sequential chapter completion.  

---

## **🚀 Tech Stack**  

### **Frontend:**  
- **React.js** (Vite for fast builds)  
- **React Router** (Navigation & Routing)  
- **Tailwind CSS** (Styling & UI Enhancements)  

### **State Management:**  
- **Zustand** (Lightweight global state management)  

### **Backend (Static JSON File):**  
- **db.json** stored in the `public/` folder (No need for a backend server)  
- **fetch() API** to load courses from `public/db.json`  

---

## **📦 Project Setup**  

### **1. Clone the Repository**  
```sh
git clone https://github.com/Shubh-31/LMSTask.git
cd LMSTask
```

### **2. Install Dependencies**  
```sh
npm install
```

### **3. Start the React App**  
```sh
npm run dev
```

### **4. Deploying on Vercel**  
1. Push your code to GitHub:  
   ```sh
   git add .
   git commit -m "Updated db.json location"
   git push origin main
   ```
2. Go to **Vercel Dashboard** → Import Project → Select GitHub Repo.  
3. Deploy, and Vercel will serve your React frontend.  

---

## **📌 Features Implemented**  

### ✅ **Course Listing with Progress Tracking**  
- Fetches courses **directly from `public/db.json`**.  
- Displays **completion percentage** for each course.  

### ✅ **Course Enrollment & Progress Management**  
- Users can **enroll** in courses.  
- Tracks **completed chapters** dynamically.  
- **Chapters unlock sequentially** (user must complete one to access the next).  

### ✅ **Fetching Data Without a Backend**  
- **No need to run a server**.  
- Course data is stored in `public/db.json` and fetched directly using `fetch()`.  
- Works **flawlessly on Vercel**.  

---

## **📄 Folder Structure**  
```plaintext
lms-app/
│── public/
│   │── db.json                  # ✅ Static course data (No backend needed)
│── src/
│   │── store/
│   │   │── enrollmentStore.jsx  # Manages enrollment state
│   │   │── progressStore.jsx    # Tracks course progress
│   │── CourseList.jsx            # Displays available courses
│   │── CourseDetails.jsx         # Shows chapters & completion tracking
│   │── SkeletonLoader.jsx        # Shows a skeleton loader while fetching
│   │── App.jsx                   # Main entry point
│── README.md                    # Documentation
│── package.json                  # Dependencies & scripts
```

---

## **🎯 Future Enhancements**  
- ✅ **Authentication System** (Login & Sign-up)  
- ✅ **Persist Progress in a Database**  
- ✅ **Quiz System** (Assessments per chapter)  
- ✅ **Dark Mode Theme**  

---

## **🤝 Contributing**  
Feel free to fork this project and submit pull requests. Contributions are always welcome! 🚀  

---

## **📝 License**  
This project is licensed under the **MIT License**.  

