var $ = require('jquery');

function Post(){

}
Post.fetch = function(){
  $.ajax('http://tiny-lasagna-server.herokuapp.com/collections/posts')
    .done(function(posts){
      $(document).trigger('posts:fetch', [posts]);
    });
};

module.exports = Post;
