import React, { Component } from "react";
import "../../styles/navbar_component_styles/AboutUs.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CommentForm from "./aboutUsComponents/CommentForm";

export const CComment = {
  cUsername: "",
  cText: "",
  cRaiting: "",
  notBot(u: string, t: string, r: string) {
    var checkbox: HTMLInputElement = document.getElementById(
      "commentCheckbox"
    ) as HTMLInputElement;
    if (checkbox.checked == true) {
      this.cUsername = u;
      this.cText = t;
      this.cRaiting = r;
    }
  },
};
export type ComState = typeof CComment;
export const ComContext = React.createContext(CComment);

interface Props {}

interface State {
  comments: Array<Comment>;
}

export default class AboutUs extends Component<Props, State> {
  comState: ComState = CComment;
  constructor(props: Props) {
    super(props);

    this.state = {
      comments: [],
    };
    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.state.comments.push(
      new Comment("Damir Bulegenov", "the best site I'v ever seen", "5")
    );
    console.log(this.state.comments);
  }

  addComment() {
    var checkbox: HTMLInputElement = document.getElementById(
      "commentCheckbox"
    ) as HTMLInputElement;
    if (checkbox.checked == false) {
      alert("Click checkbox");
    } else {
      var joined = this.state.comments.concat(new Comment(this.comState.cUsername,this.comState.cText,this.comState.cRaiting));
      this.setState({ comments: joined });
      alert("Your comment was added");
    }
  }

  render() {
    return (
      <ComContext.Provider value={this.comState}>
        <div className="home">
          <Navbar />
          <div className="container">
            <div className="box">
              <div className="icon">GG</div>
              <div className="content">
                <h3>GOOD GAME</h3>
                <p>
                  We provide our players with the latest and highly rated games
                  to keep you playing only high rated and <b>GOOD GAMES</b>!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">HF</div>
              <div className="content">
                <h3>HAVE FUN</h3>
                <p>
                  Our games guarantee you unrestrained fun all day long, so just
                  GOOD LUCK & <b>HAVE FUN</b>!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">N1</div>
              <div className="content">
                <h3>NUMER ONE</h3>
                <p>
                  Our team guarantees you that all our games are checked for
                  viruses, because we try to be like you: always be{" "}
                  <b>NUMBER ONE</b>!
                </p>
              </div>
            </div>
            <CommentForm />
            <button className="addCommentButton" onClick={this.addComment}>
              Add comment
            </button>
            <div className="comments">
              {this.state.comments.map((item: Comment, index: number) => (
                <p className="userComment" key={index}>
                  <span className="userCommentName">
                    {item.commentUsername}
                  </span>
                  {item.commentText}
                  <span className="userCommentRaiting">
                    {item.commentRaiting}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </ComContext.Provider>
    );
  }
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
