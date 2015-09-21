var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit: function(e){

  },
  render: function() {
    return (
      React.createElement("form", {className: "commentForm"}, 
          React.createElement("input", {type: "text", placeholder: "Your name"}), 
          React.createElement("input", {type: "text", placeholder: "Say something..."}), 
          React.createElement("input", {type: "submit", value: "Post"})
        )
    );
  }
});
