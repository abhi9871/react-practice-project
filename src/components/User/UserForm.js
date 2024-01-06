import { useState } from "react";
import AlertMessageModal from "../Alert/AlertMessageModal";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const userData = {
      name: enteredUserName,
      age: enteredUserAge,
    };
    props.userData(userData);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <AlertMessageModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-user__controls">
          <div className="new-user__control">
            <label>UserName</label>
            <input
              type="text"
              value={enteredUserName}
              onChange={userNameHandler}
            />
          </div>
          <div className="new-user__control">
            <label>Age (Years)</label>
            <input
              type="number"
              value={enteredUserAge}
              onChange={userAgeHandler}
            />
          </div>
          <div className="new-user__actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
