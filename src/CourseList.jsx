import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProgressStore from "./store/progressStore";
import SkeletonLoader from "./SkeletonLoader";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { progress } = useProgressStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/db.json") 
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-4">
        Explore Our Courses
      </h1>
      <h4 className="text-lg font-semibold text-center text-gray-700 mb-10">
        Learn and grow with the best content available.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(6).fill(0).map((_, i) => <SkeletonLoader key={i} />) 
          : courses.map((course) => {
              const completedChapters = progress[course.id]?.length || 0;
              const totalChapters = course.chapters.length;
              const completionPercentage = Math.round((completedChapters / totalChapters) * 100);

              return (
                <div key={course.id} className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
                  <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
                  <p className="text-gray-600 mt-2">{course.description}</p>

                  <p className="mt-4 text-sm font-medium text-gray-600">
                    {completionPercentage > 0 ? `📖 You completed ${completionPercentage}% of the course` : "Start learning today!"}
                  </p>

                  <button
                    className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg hover:shadow-lg transform transition hover:scale-105 text-sm font-semibold"
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
