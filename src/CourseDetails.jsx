import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useEnrollmentStore from "./store/enrollmentStore";
import useProgressStore from "./store/progressStore";
import SkeletonLoader from "./SkeletonLoader";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enrolledCourses, enrollCourse } = useEnrollmentStore();
  const { progress, completeChapter } = useProgressStore();

  useEffect(() => {
    fetch("/db.json") 
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.courses.find((c) => c.id === parseInt(id));
        setCourse(foundCourse);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching course:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-10"><SkeletonLoader /></div>; 
  if (!course) return <p className="text-center mt-10 text-red-500">Course not found</p>;

  const isEnrolled = enrolledCourses.includes(course.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-10">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-3xl mx-auto relative">
        
        {!isEnrolled && (
          <button
            className="absolute top-5 right-5 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer transform hover:scale-105"
            onClick={() => enrollCourse(course.id)}
          >
            Enroll Now
          </button>
        )}

        <h1 className="text-4xl font-extrabold text-gray-800">{course.title}</h1>
        <p className="text-lg text-gray-700 mt-4">{course.description}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">📚 Course Chapters</h2>
          <ul className="mt-4 space-y-4">
            {course.chapters.map((chapter, index) => {
              const isCompleted = progress[course.id]?.includes(index);
              const isDisabled = index > 0 && !progress[course.id]?.includes(index - 1);

              return (
                <li key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
                  <span className="text-lg font-medium">{chapter}</span>
                  
                  {isEnrolled && (
                    <button
                      className={`px-5 py-2 rounded-lg text-white font-semibold transition transform hover:scale-105 ${
                        isCompleted
                          ? "bg-green-500 cursor-not-allowed"
                          : isDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                      }`}
                      onClick={() => completeChapter(course.id, index)}
                      disabled={isCompleted || isDisabled}
                    >
                      {isCompleted ? "✅ Completed" : "Finish"}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
