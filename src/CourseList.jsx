import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useProgressStore from "./store/progressStore";
import SkeletonLoader from "./SkeletonLoader";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { progress } = useProgressStore();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/courses")
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Available Courses
      </h1>
      <h4 className="text-lg font-semibold text-center text-gray-600 mb-8">
        Learning Made Easy
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6).fill(0).map((_, i) => <SkeletonLoader key={i} />) 
          : courses.map((course) => {
              const completedChapters = progress[course.id]?.length || 0;
              const totalChapters = course.chapters.length;
              const completionPercentage = Math.round((completedChapters / totalChapters) * 100);

              return (
                <div key={course.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                  <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
                  <p className="text-gray-600 mt-2">{course.description}</p>
                  
                
                  <p className="mt-2 text-sm font-semibold text-gray-600">
                    {completionPercentage > 0 ? `You completed ${completionPercentage}% of the course` : "Not started yet"}
                  </p>

                  <button
                    className="mt-4 w-full bg-blue-500 text-gray px-4 py-2 rounded-lg hover:bg-blue-600 hover:border-blue hover:rounded-lg transition cursor-pointer text-sm font-semibold hover:underline"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    View Chapters
                  </button>
                </div>
              );
          })}
      </div>
    </div>
  );
};

export default CourseList;
