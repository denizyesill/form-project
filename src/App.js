import { useState } from "react";

import "./App.css";

const App = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="page_container">
      deniz yesil
      <div className="form_section">
        <form onSubmit={handleSubmit} className="form_container">
          <legend>
            <h3>Kişisel Bilgiler</h3>
          </legend>
          <br />

          <label>
            <h5>Enter your name:</h5>
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <h5>Enter your age: </h5>
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
            />
          </label>
          
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
