import { useState, useRef } from "react";
import AlertMessageModal from "../Alert/AlertMessageModal";
import Wrapper from "../Helpers/Wrapper";
import "./UserForm.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameInputRef.current.value;
    console.log(enteredCollegeName);

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username, age (non-empty values) and college name.",
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
      collegeName: enteredCollegeName
    };
    props.userData(userData);
    nameInputRef.current.value = '';   // generally avoids because it breaks the react's declarative approach nature 
    ageInputRef.current.value = '';    // generally avoids because it breaks the react's declarative approach nature
    collegeNameInputRef.current.value = ''; // generally avoids because it breaks the react's declarative approach nature
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
              ref={nameInputRef}
            />
          </div>
          <div className="new-user__control">
            <label>Age (Years)</label>
            <input
              type="number"
              ref={ageInputRef}
            />
          </div>
          <div className="new-user__control">
            <label>College Name</label>
            <input
              type="text"
              ref={collegeNameInputRef}
            />
          </div>
          <div className="new-user__actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserForm;
