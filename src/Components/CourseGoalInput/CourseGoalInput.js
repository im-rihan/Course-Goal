import React, { useState } from "react";
import "./CourseGoalInput.css";
import Button from "../UI Buttons/Button";
const CourseGoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(props.onAddGoal(enteredValue));
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            border: !isValid ? "1px solid red" : "1px solid #ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit" />
    </form>
  );
};

export default CourseGoalInput;
