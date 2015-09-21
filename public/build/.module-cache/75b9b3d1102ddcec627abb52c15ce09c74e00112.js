var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer:function(){
    $.ajax({
      url:this.props.url,
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentsDidMount: function(){
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, {url: "comments.json"}),
  document.getElementById('content')
);
