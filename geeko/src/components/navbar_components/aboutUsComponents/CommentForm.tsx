import React from "react";
import "../../../styles/navbar_component_styles/aboutUsComponents/CommentForm.css";
import {ComContext} from "../AboutUs"

let commentList: Array<Comment> = [];
var username: any = "";
var comment: any = "";
var raiting: any = "";

var usernameRef = React.createRef<HTMLInputElement>();
var commentRef = React.createRef<HTMLTextAreaElement>();
var raitingRef = React.createRef<HTMLInputElement>();

export default function CommentForm() {
    var comContext=React.useContext(ComContext)

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
      <div className="commentRaitingDiv">
        <div className="commentRaitingDiv1">
          <input
            type="text"
            className="commentRaitingInput"
            ref={raitingRef}
            onChange={updateRaiting}
          />
        </div>
        <span className="raitingSpan">Plese give us raiting from 1 to 5</span>
      </div>
      <label className="checkboxLabel">
        <input type="checkbox" id="commentCheckbox" onClick={()=>comContext.notBot(username,comment,raiting)}/>
        <span className="checkboxSpan ">I'm not bot</span>
      </label>
      {commentList.map((item: any, index: number) => (
        <div className="userComment" key={index}>
          <p>
            {item.commentText}
            <span>{item.commentRaiting}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

function updateUsername() {
  username = usernameRef.current?.value;
}
function updateComment() {
  comment = commentRef.current?.value;
}
function updateRaiting() {
  raiting = raitingRef.current?.value;
}

class Comment {
  commentUsername: string;
  commentText: string;
  commentRaiting: string;
  constructor(
    commentUsername: string,
    commentText: string,
    commentRaiting: string
  ) {
    this.commentUsername = commentUsername;
    this.commentText = commentText;
    this.commentRaiting = commentRaiting;
  }
}
