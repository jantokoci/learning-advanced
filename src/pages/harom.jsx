import { useState } from "react";
import HomeButton from "../components/homebutton";
import "../styles/haromstyle.css";
import { FaStar } from "react-icons/fa";

function Rating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  console.log(rating);
  return (
    <div className="star-rating">
      <HomeButton />
      <br />
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
      {rating > 0 ? (
        <h1>You rated my learning curve {rating} stars</h1>
      ) : (
        <h1>You did not rated my learning curve</h1>
      )}
    </div>
  );
}

export default Rating;
