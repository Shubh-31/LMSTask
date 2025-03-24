<<<<<<< HEAD
# LMSTask
=======
# Learning Management System (LMS)

A modern Learning Management System (LMS) built with **React.js, Zustand, Tailwind CSS, and JSON Server** to handle course enrollment, progress tracking, and chapter completion.

---

## 🚀 **Tech Stack**

### **Frontend:**

- **React.js** (Vite for fast builds)
- **React Router** (Navigation & Routing)
- **Tailwind CSS** (Styling & UI Enhancements)

### **State Management:**

- **Zustand** (Lightweight global state management)

### **Backend (Mock API):**

- **JSON Server** (Mock API for fetching courses & chapters)
- **Axios** (For API calls)

---

## 📦 **Project Setup**

### **1. Clone the Repository**

```sh
git clone https://github.com/your-repo/lms-app.git
cd lms-app
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Start JSON Server**

Navigate to the `src` folder:

```sh
cd src
```

Run JSON Server:

```sh
json-server --watch db.json --port 5000
```

### **4. Start the React App**

Open a new terminal and run:

```sh
npm run dev
```

---

## 📌 **Features Implemented**

### ✅ **Course Listing with Progress Tracking**

- Displays available courses fetched from **JSON Server**.
- Shows **completion percentage** for each course.

### ✅ **Course Enrollment & Progress Management**

- Users can **enroll** in courses.
- **Tracks completed chapters** and updates progress dynamically.
- Chapters **unlock sequentially**, meaning a user must complete one to access the next.

### ✅ **UI Enhancements with Tailwind CSS**

- Modern & responsive UI with hover effects, shadows, and transitions.
- **Dynamic "Enroll Now" Button** (Only appears if the user isn't enrolled).

### ✅ **Routing & Navigation**

- Clicking on "View Chapters" navigates to the detailed course page.
- Uses **React Router** for seamless navigation.

---

## 📄 **Folder Structure**

```plaintext
lms-app/
│── src/
│   │── store/
│   │   │── enrollmentStore.jsx  # Manages enrollment state
│   │   │── progressStore.jsx    # Tracks course progress
│   │── CourseList.jsx           # Displays available courses
│   │── CourseDetails.jsx        # Shows chapters & completion tracking
│   │── ProgressBar.jsx          # Displays course progress visually
│   │── db.json                  # Mock API (Course data & chapters)
│   │── App.jsx                  # Main entry point
│── README.md                    # Documentation
│── package.json                 # Dependencies & scripts
```

---

## 🎯 **Future Enhancements**

- ✅ **Authentication System** (Login & Sign-up)
- ✅ **Persist Progress in a Database**
- ✅ **Quiz System** (Assessments per chapter)
- ✅ **Dark Mode Theme**

---

## 🤝 **Contributing**

Feel free to fork this project and submit pull requests. Contributions are always welcome! 🚀

---

## 📝 **License**

This project is licensed under the **MIT License**.
>>>>>>> master
