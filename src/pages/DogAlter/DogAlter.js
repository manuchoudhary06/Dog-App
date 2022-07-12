import "./DogAlter.css";
import { useState, useEffect } from "react";

function DogAlter() {
  const initialValues = {
    name: "",
    color: "",
    breed: "",
    dateOfBirth: "",
    age: "",
    availableQuantity: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeState = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("submitted Successfully");
    }
  }, [formErrors]);

  const validate = (values) => {
    console.log(values);
    const error = {};
    if (!values.name) {
      error.name = "Name is required";
    }
    if (!values.color) {
      error.color = "Color is required";
    }
    if (!values.breed) {
      error.breed = "breed is required";
    }
    if (!values.dateOfBirth) {
      error.dateOfBirth = "Please Select the date";
    }
    if (!values.age) {
      error.age = "Age is required";
    }
    if (!values.availableQuantity) {
      error.availableQuantity = "Available Quantity is required";
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <div className="dogAlter-container">
      <form className="dogAlter-form" onSubmit={handleSubmit}>
        <label className="name-label">Name</label>
        <input
          type="text"
          className="name-input"
          placeholder="Name"
          name="name"
          value={formValues.name}
          onChange={(event) => handleChangeState(event)}
        />
        <p className="error-message">{formErrors.name} </p>
        <lable className="color-label">Color</lable>
        <input
          type="text"
          className="color-input"
          placeholder="Color"
          name="color"
          value={formValues.color}
          onChange={(event) => handleChangeState(event)}
        />
        <p className="error-message">{formErrors.color} </p>
        <label className="breed-label">Breed</label>
        <select
          className="breed-select"
          value={formValues.breed}
          onChange={(event) => handleChangeState(event)}
          name="breed"
        >
          <option value="labrador">Labrador</option>
          <option value="doberman">Doberman</option>
          <option value="germanShepherd">German Shepherd</option>
          <option value="pomerian">Pomerian</option>
          <option value="husky">Huskey</option>
        </select>
        <p className="error-message">{formErrors.breed} </p>
        <lable className="dob-label">Date Of Birth</lable>
        <input
          type="date"
          className="dob-input"
          name="dateOfBirth"
          value={formValues.dateOfBirth}
          onChange={(event) => handleChangeState(event)}
        />
        <p className="error-message">{formErrors.dateOfBirth} </p>
        <lable className="age-label">Age</lable>
        <input type="number" name="age" disabled className="age-input" />
        <p className="error-message">{formErrors.age} </p>
        <label className="quantity-lable">Available Quanity</label>
        <input
          type="number"
          disabled
          className="quantity-input"
          placeholder="1"
          value={formValues.availableQuantity}
          onChange={(event) => handleChangeState(event)}
        />
        <p className="error-message">{formErrors.availableQuantity} </p>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default DogAlter;
