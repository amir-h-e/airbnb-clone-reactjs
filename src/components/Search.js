import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
// main style file
import "react-date-range/dist/styles.css";
// theme style file
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";

// DATE PICKER COMPONENT
const Search = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")} variant="outlined">
        Search Airbnb
      </Button>
    </div>
  );
};

export default Search;
