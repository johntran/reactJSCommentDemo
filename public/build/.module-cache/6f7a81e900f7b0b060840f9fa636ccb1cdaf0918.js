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
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author){
      return;
    }
    // TODO: Send Request
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).values = '';
    return;
  },
  render: function() {
    return (
      React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
          React.createElement("input", {type: "text", placeholder: "Your name", ref: "author"}), 
          React.createElement("input", {type: "text", placeholder: "Say something...", ref: "text"}), 
          React.createElement("input", {type: "submit", value: "Post"})
        )
    );
  }
});
