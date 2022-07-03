import SearchResult from "./SearchResult";
import { Button } from "@mui/material";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays . 26 august to 30 august . 2 august</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility </Button>
        <Button variant="outlined">Type of olace </Button>
        <Button variant="outlined">Price </Button>
        <Button variant="outlined">Rooms and beds </Button>
        <Button variant="outlined">More filters </Button>
        <SearchResult
          img="../images/17-fabulous-bedroom-decor-ideas-FB-1200x700-compressed.jpg"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
        <SearchResult
          img="../images/Blueground Furnished Apartment, NYC.jpg"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
        <SearchResult
          img="../images/blueground-apartment-2-2-2.jpg"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
        <SearchResult
          img="../images/Final+Bedroom+Image+-+Adrian+Tan+Photography.jpg"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
        <SearchResult
          img="../images/111LexowAve_Aug18-1074.webp"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
        <SearchResult
          img="../images/DSC05610.webp"
          location="Private room in center of London"
          title="Stay at this spaceous Eswardian House"
          description="1 bed . 1 bedroom . 1.5 shared bthroom .Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="$30 / night"
          total="$117 total"
        />
      </div>
    </div>
  );
};

export default SearchPage;
