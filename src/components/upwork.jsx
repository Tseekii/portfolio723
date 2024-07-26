const Upwork = ({ title, date, image }) => {
  return (
    <div className="flex">
      <img src={image} />
      {/* <img src="./image/profile.png" alt="" /> */}
      <div>
        <h3>{title}</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <p>{date}</p>
    </div>
  );
};

export default Upwork;
