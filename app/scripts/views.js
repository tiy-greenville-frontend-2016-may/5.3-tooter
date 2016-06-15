var $ = require('jquery');

function PostView(){
  console.log('PostView working!');
}
PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title +
      '</h1><p>' + post.body + '</p></li>');
  });
}

module.exports = PostView;
