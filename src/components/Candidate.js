import "./candidate.css";

function Candidate({ imgSrc, name }) {
  return (
    <div className="customCard">
      <img src={imgSrc} alt={name} />
      <div className="candidateName">
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Candidate;
