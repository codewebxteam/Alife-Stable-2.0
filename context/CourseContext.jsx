"use client";

import React, { createContext, useContext, useState } from "react";

const CourseContext = createContext({
  isEnrolled: () => false,
  getEnrolledCourse: () => null,
  updateCourseProgress: () => {},
});

export const CourseProvider = ({ children }) => {
  const [enrolledCourses] = useState([]);

  const isEnrolled = (courseId) => {
    return false;
  };

  const getEnrolledCourse = (courseId) => {
    return null;
  };

  const updateCourseProgress = (courseId, progress) => {
    // Progress tracking callback
  };

  return (
    <CourseContext.Provider
      value={{
        isEnrolled,
        getEnrolledCourse,
        updateCourseProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  return useContext(CourseContext);
};

export default CourseContext;
