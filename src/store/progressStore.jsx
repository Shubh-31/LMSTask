import { create } from "zustand";

const useProgressStore = create((set) => ({
  progress: {},

  completeChapter: (courseId, chapterIndex) => set((state) => {
    const updatedProgress = {
      ...state.progress,
      [courseId]: [...(state.progress[courseId] || []), chapterIndex],
    };
    return { progress: updatedProgress };
  }),

  isChapterCompleted: (courseId, chapterIndex) => {
    return !!(state.progress[courseId]?.includes(chapterIndex));
  },
}));

export default useProgressStore;
