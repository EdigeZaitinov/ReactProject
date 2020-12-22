import React from "react";
import "../../../styles/navbar_component_styles/aboutUsComponents/CommentForm.css";
import { ComContext } from "../AboutUs";

var username: any = "";
var comment: any = "";
var raiting: any = "";

var usernameRef = React.createRef<HTMLInputElement>();
var commentRef = React.createRef<HTMLTextAreaElement>();
var raitingRef = React.createRef<HTMLInputElement>();

export default function CommentForm() {
  var comContext = React.useContext(ComContext);

  return (
    <div className="commentForm">
      <div className="commentInputDiv">
        <input
          type="text"
          className="commentInputUsername"
          ref={usernameRef}
          onChange={updateUsername}
          placeholder="your username"
        />
        <textarea
          className="commentTextarea"
          placeholder="your comment"
          ref={commentRef}
          onChange={updateComment}
        />
      </div>
      <label className="checkboxLabel">
        <input
          type="checkbox"
          id="commentCheckbox"
          onClick={() => comContext.notBot(username, comment)}
        />
        <span className="checkboxSpan ">I'm not bot</span>
      </label>
    </div>
  );
}

function updateUsername() {
  username = usernameRef.current?.value;
}
function updateComment() {
  comment = commentRef.current?.value;
}

class Comment {
  commentUsername: string;
  commentText: string;
  constructor(commentUsername: string, commentText: string) {
    this.commentUsername = commentUsername;
    this.commentText = commentText;
  }
}
