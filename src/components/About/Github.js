import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div style={{color:'white'}} className="pb-4">
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="pb-4" style={{ paddingBottom: "20px",textAlign:'center'}}>
        Days I <strong style={{ color: '#C6FFDD' }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="JJJJEAR"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Row>
    </div>
  );
}

export default Github;
