var $ = require('jquery');

function Post(){

}
Post.fetch = function(){
  return $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts')
    .done(function(posts){
      $(document).trigger('posts:fetched', [posts]);
    });
};

module.exports = Post;
