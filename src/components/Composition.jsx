const Composition = ({ pic1, pic2, pic3 }) => {
  return (
    <div className="composition">
      <img src={pic1} alt="Photo 1" className="composition__photo composition__photo--p1" />
      <img src={pic2} alt="Photo 2" className="composition__photo composition__photo--p2" />
      <img src={pic3} alt="Photo 3" className="composition__photo composition__photo--p3" />
    </div>
  );
};

export default Composition;
