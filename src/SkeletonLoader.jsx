const SkeletonLoader = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="mt-4 h-10 bg-gray-300 rounded w-full"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  