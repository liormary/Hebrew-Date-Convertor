import React, { useState } from "react";
import Result from "./Result";

const DateConverter = () => {
  const [date, setDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = async (event) => {
    event.preventDefault();

    if (!date) {
      setError("Please select a date!");
      setResult(null);
      return;
    }

    setError("");
    try {
      const response = await fetch(`http://localhost:5000/convert?date=${date}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      setResult(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleConvert}>
        <label className="date">Enter a Gregorian Date:</label>
        <input
          className="input"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && <Result data={result} />}
    </div>
  );
};

export default DateConverter;
