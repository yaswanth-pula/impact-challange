import useApiFetch from "../services/apiCall";
import Candidate from "./Candidate";
import "./candidate.css";

function CandidateList() {
  const [candidateList] = useApiFetch();

  return (
    <div className="candidateList">
      {candidateList.map((candidate) => {
        return (
          <Candidate
            key={candidate.id}
            imgSrc={candidate.Image}
            name={candidate.name}
          />
        );
      })}
    </div>
  );
}

export default CandidateList;
