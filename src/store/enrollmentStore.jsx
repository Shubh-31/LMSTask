import { create } from "zustand";

const useEnrollmentStore = create((set) => ({
  enrolledCourses: JSON.parse(localStorage.getItem("enrolledCourses")) || [],

  enrollCourse: (courseId) => set((state) => {
    const updatedCourses = [...state.enrolledCourses, courseId];
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    return { enrolledCourses: updatedCourses };
  }),
}));

export default useEnrollmentStore;
