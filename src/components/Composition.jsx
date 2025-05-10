const Composition = ({ pic1, pic2, pic3 }) => {
  return (
    <div className="composition">
      {[pic1, pic2, pic3].map(({image, alt}, idx) => (
        <img
          key={alt}
          src={image}
          alt={alt}
          className={`composition__photo composition__photo--p${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default Composition;
