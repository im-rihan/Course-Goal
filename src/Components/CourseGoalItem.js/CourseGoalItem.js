import React from "react";
import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    return props.onDelete(props.id);
    // console.log(props.onDelete(props.id));
  };
  return (
    <>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
    </>
  );
};

export default CourseGoalItem;
