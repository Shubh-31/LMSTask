import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useEnrollmentStore from "./store/enrollmentStore";
import useProgressStore from "./store/progressStore";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { enrolledCourses, enrollCourse } = useEnrollmentStore();
  const { progress, completeChapter } = useProgressStore();

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error("Error fetching course:", err));
  }, [id]);

  if (!course) return <p>Loading...</p>;

  const isEnrolled = enrolledCourses.includes(course.id);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto relative">
       
        {!isEnrolled && (
          <button
            className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
            onClick={() => enrollCourse(course.id)}
          >
            Enroll Now
          </button>
        )}

        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <p className="text-gray-600 mt-2">{course.description}</p>

     
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Chapters</h2>
          <ul className="mt-4 space-y-3">
            {course.chapters.map((chapter, index) => {
              const isCompleted = progress[course.id]?.includes(index);
              const isDisabled = index > 0 && !progress[course.id]?.includes(index - 1);

              return (
                <li key={index} className="flex items-center justify-between bg-gray-200 p-3 rounded-lg">
                  <span className="text-lg">{chapter}</span>
                  
                  {isEnrolled && (
                    <button
                      className={`px-4 py-2 rounded-lg text-white ${
                        isCompleted
                          ? "bg-green-500 cursor-not-allowed"
                          : isDisabled
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                      }`}
                      onClick={() => completeChapter(course.id, index)}
                      disabled={isCompleted || isDisabled}
                    >
                      {isCompleted ? "Completed ✅" : "Finish"}
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
