import useApiFetch from "../services/apiCall";
import Candidate from "./Candidate";
import "./candidate.css";

function CandidateList() {
  const [candidateList, isLoading] = useApiFetch();

  return (
    <div className="candidateList">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        candidateList.map((candidate) => {
          return (
            <Candidate
              key={candidate.id}
              imgSrc={candidate.Image}
              name={candidate.name}
            />
          );
        })
      )}
    </div>
  );
}

export default CandidateList;
