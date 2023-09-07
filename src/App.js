import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";

function App() {
  const [name, setName] = useState("Techinfoyt");
  const [date, setDate] = useState("DOB");

  return (
    <div className="container">
      <h1 className="text-center">Signature App</h1>
      <Title text={name} />
      <Title text={date} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        asperiores atque quasi eius nulla incidunt fuga. Sit cumque, doloribus
        ipsa, illo, similique repudiandae cupiditate asperiores inventore dicta
        vitae quam neque.
      </p>
      <div className="d-flex input-boxes">
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
