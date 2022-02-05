import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navigate from "../components/NavBar";
import StoryBox from "../components/StoryBox";
import { toast } from "react-toastify";

export default function Vote({ story }) {
  const [voteRef] = useState([]);
  const [approveRef] = useState([]);
  const [denyRef] = useState([]);

  function voteCreditsAvailable() {
    //need to implement this!
    return 10;
  }

  function handleVote() {
    const voteCredits = voteRef.current.value;
    const approve = approveRef.current.value;
    const deny = denyRef.current.value;

    console.log(voteCredits, approve, deny);
    toast("Your vote has been submitted!!");
  }

  return (
    <>
      <Container>
        <StoryBox story={story} />
        <label>Vote Credits Available: 100</label>
        <div>
          <label>Vote Credits to be used:</label>
          <input type="text" className="form-control" ref={voteRef}></input>
          <br />
          <div>
            <input type="radio" ref={approveRef}></input> &nbsp;
            <label>Approve </label> &nbsp;
            <input type="radio" ref={denyRef}></input>&nbsp;
            <label>Deny </label>
          </div>
          <br />
          <div>
            <button
              onClick={handleVote}
              className="btn btn-primary"
              onClick={handleVote}
            >
              Submit Your Vote!
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
