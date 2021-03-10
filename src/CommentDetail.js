import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img alt="avatar" src={props.image} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
