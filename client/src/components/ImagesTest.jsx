import "./ImagesTest.css";

function ImagesTest() {
  return (
    <div className="images">
      <figcaption>
        <img src="./public/images/loto.jpg"
             alt="loto"
             height="100" />
      </figcaption>
      <figcaption>
        <img
          src="./public/images/Train Japon.jpg"
          alt="train-japon"
          height="100"
        />
      </figcaption>
    </div>
  );
}

export default ImagesTest;
