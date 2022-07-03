import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Search from "./Search";

const Banner = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out there and dtrech your imagination</h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
          perferendis obcaecati soluta qui
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
