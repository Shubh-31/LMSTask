import useProgressStore from "./store/progressStore";

const ProgressBar = ({ courseId, totalChapters }) => {
  const { progress } = useProgressStore();
  const completed = progress[courseId]?.length || 0;
  const percentage = (completed / totalChapters) * 100;

  return (
    <div className="w-full bg-gray-200 h-4 rounded mt-4">
      <div className="bg-blue-500 h-full transition-all" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
