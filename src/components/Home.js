import Card from "./Card";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home_section">
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="3 Bedroom flat in bournemouth"
          description="Superhost with a stunning view of the beachside in sunny bournemouth"
          price="$130/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="Penthouse in London"
          description="Superhost with a stunning view of the beachside in sunny bournemouth"
          price="$350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with a stunning view of the beachside in sunny bournemouth"
          price="$78/night"
        />
      </div>
    </div>
  );
};

export default Home;
