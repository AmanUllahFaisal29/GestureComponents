import Button from "./Components/1.Button";
import Dropdown from "./Components/2.Dropdown";
import FeedbackForm from "./Components/3.FeedbackForm";
import SearchBar from "./Components/4.SearchBar";
import Table from "./Components/5.DataTable";
import React, { useState } from "react";
import "./App.css";

function App() {

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleFeedbackClick = () => {
    setIsFeedbackOpen(true);
  };

  const handleCloseFeedback = () => {
    setIsFeedbackOpen(false);
  };

  const [data, setData] = useState([
    { symbol: "AAPL", name: "Apple Inc.", category: "Technology", price: 145.12 },
    { symbol: "GOOGL", name: "Alphabet Inc.", category: "Technology", price: 2725.45 },
    { symbol: "MSFT", name: "Microsoft Corporation", category: "Technology", price: 298.80 },
    // Add more data as needed
  ]);

  return (
    <div className="App-header">
      <h1>Components</h1>
    <h2>1. Button</h2>
    <Button text="Click me" onClick={handleFeedbackClick} />

    <h2>2. Dropdown Menu Component</h2>
    <Dropdown
      options={options}
      selectedOption={selectedOption}
      onOptionSelect={handleOptionSelect}
    />

    <h2>3. Feedback Form Component</h2>
    {isFeedbackOpen && <FeedbackForm onClose={handleCloseFeedback} onSend={(feedback) => console.log(feedback)} />}
    <h3>Click on the above button to display it.</h3>

    <h2>4. Searchbar Component</h2>
    <SearchBar placeholder="Search" data={data} />

    <h2>5. Data Table Component</h2>
    <Table data={data} />
    </div>
  );
}

export default App;
