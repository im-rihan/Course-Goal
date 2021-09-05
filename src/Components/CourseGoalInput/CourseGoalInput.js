import React, { useState } from "react";
// import "./CourseGoalInput.css";
import FormControl from "../CourseGoalFormColntrol/FormControl";
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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputHandler} value={enteredValue} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseGoalInput;
