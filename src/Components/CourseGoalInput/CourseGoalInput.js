import React, { useState } from "react";
import "./CourseGoalInput.css";
import Button from "../UI Buttons/Button";
const CourseGoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(props.onAddGoal(enteredValue));
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          type="text"
          placeholder="Add Goal"
          onChange={goalInputHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit" />
    </form>
  );
};

export default CourseGoalInput;
