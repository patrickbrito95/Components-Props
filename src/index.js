import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui comments">
      <h1>Comments</h1>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 12:43PM"
          comment="Wow!!!!"
          image={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Patrick"
          time="Today at 11:50AM"
          comment="Awesomeeee!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Amanda"
          time="Today at 05:21AM"
          comment="I love it at all!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="George"
          time="Yesterday at 10:32PM"
          comment="Gorgeous..."
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Matt"
          time="Friday at 08:00PM"
          comment="Nice, man!"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
