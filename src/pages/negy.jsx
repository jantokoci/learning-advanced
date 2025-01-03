import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import HomeButton from "../components/homebutton";

//need to fix

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data, please wait!</div>;
  }

  if (errorMsg !== null) {
    return <div>Error! {errorMsg}</div>;
  }

  function handlePrevius() {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevius}
      />
      {images && images.lenght
        ? null
        : images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "currentimg"
                  : "currentimg hide-currentimg"
              }
            />
          ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.lenght
          ? null
          : images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator update-current-indicator"
                }
              ></button>
            ))}
      </span><br />
      <HomeButton />
    </div>
  );
}

export default ImageSlider;
