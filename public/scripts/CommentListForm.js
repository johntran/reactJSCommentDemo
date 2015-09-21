var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e){

  },
  render: function() {
    return (
      <form className="commentForm">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Say something..." />
          <input type="submit" value="Post" />
        </form>
    );
  }
});
