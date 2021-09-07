import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

   & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    font: inherit;
    padding: 0.2rem 0;
    line-height: 0.5rem;
    background: ${(props) => (props.invalid ? "rgb(223, 166, 166)" : "")};
  }
`;

export default FormControl;
