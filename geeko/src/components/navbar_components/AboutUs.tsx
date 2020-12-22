import Axios from "axios";
import React, { Component } from "react";
import "../../styles/navbar_component_styles/AboutUs.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import CommentForm from "./aboutUsComponents/CommentForm";

export const CComment = {
  cUsername: "",
  cText: "",
  notBot(u: string, t: string) {
    var checkbox: HTMLInputElement = document.getElementById(
      "commentCheckbox"
    ) as HTMLInputElement;
    if (checkbox.checked == true) {
      this.cUsername = u;
      this.cText = t;
    }
  },
};
export type ComState = typeof CComment;
export const ComContext = React.createContext(CComment);

interface Props {}

interface State {
  comments: Array<Comment>;
  userPk: number;
}

export default class AboutUs extends Component<Props, State> {
  comState: ComState = CComment;
  constructor(props: Props) {
    super(props);

    this.state = {
      comments: [],
      userPk: 0,
    };
    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.state.comments.push(new Comment('Baurzhan','that is the best site I have ever seen'))
  }

  async addComment() {
    var checkbox: HTMLInputElement = document.getElementById(
      "commentCheckbox"
    ) as HTMLInputElement;
    if (checkbox.checked == false) {
      alert("Click checkbox");
    } else {
      Axios.get(
        "http://127.0.0.1:8000/app/Users/" + this.comState.cUsername
      ).then((response) => {
        this.setState({
          userPk: response.data[0]["pk"],
        });
      });
      const json = JSON.stringify({
        comment: this.comState.cText,
        userComments: this.state.userPk,
      });
      const res = await Axios.post("http://127.0.0.1:8000/app/Comments", json, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data);
      var joined = this.state.comments.concat(
        new Comment(this.comState.cUsername, this.comState.cText)
      );
      this.setState({ comments: joined });
      this.comState.cUsername = "";
      this.comState.cText = "";
      this.setState({
        userPk: 0,
      });
      checkbox.checked = false;
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
            <div className="commentSection">
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
                    <span className="userCommentText">{item.commentText}</span>
                  </p>
                ))}
              </div>
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
  constructor(commentUsername: string, commentText: string) {
    this.commentUsername = commentUsername;
    this.commentText = commentText;
  }
}

class User {
  username: string;
  password: string;
  email: string;
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
