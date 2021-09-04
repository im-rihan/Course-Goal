import React, { useState } from "react";
import CourseGoalInput from "./Components/CourseGoalInput/CourseGoalInput";
import "./App.css";
import CourseGoalList from "./Components/CourseGoalList/CourseGoalList";
import ApiData from "./Components/Api";

const App = () => {
  const [courseGoals, setCourseGoals] = useState(ApiData);
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
      // return [{ text: enteredText, id: Math.random().toString() }];
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  return (
    <>
      <section id="goal-form">
        <CourseGoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseGoalList
          items={courseGoals}
          onDeleteItem={deleteItemHandler}
          id={courseGoals.id}
        />
      </section>
    </>
  );
};
export default App;
