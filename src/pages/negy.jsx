import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import HomeButton from "../components/homebutton";
import { data } from "react-router";
import "../styles/negystyle.css";

function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]); //image container
  const [currentSlide, setCurrentSlide] = useState(0); //slide indexer
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      //trying to get the pictures, loading is set to be true
      const response = await fetch(`${getUrl}?limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data); //if data exits, set the images
        setLoading(false);
      }
    } catch (e) {
      //If error has occured get the message
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevius() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  // when the url is changing the useEffect automat checking and trying to fetch the new images
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  //if loading is true the website responding with that
  if (loading) {
    return <div>Loading data! Please wait!</div>;
  }

  //if an error is on the line, the website responging with that
  if (errorMsg !== null) {
    return <div>Error: {e.message}</div>;
  }

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevius}
        />
        {
          /*Iterate (map) trough the images array, and list every image itm, with a uniqe img_id, and the url (if the images and the images.length are true) */
          images && images.length
            ? images.map((imageItem, index) => (
                <img
                  key={imageItem.id}
                  src={imageItem.url}
                  className={
                    currentSlide === index
                      ? "current-image"
                      : "current-image hide-current-image"
                  }
                />
              ))
            : null
        }
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleNext}
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator hide-current-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
}

export default ImageSlider;
