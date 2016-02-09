var app= angular.module('flapperNews', []);

app.factory('posts', [function(){
    var o = {
        posts:[]
    };
    return o;
}]);

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.posts = posts.posts;
        $scope.incrementUpvotes = function(post){
            post.upvotes += 1;
        }
        $scope.addPost = function(){
            if (!$scope.title || $scope.title ===''){
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                link: $scope.link
            });
            $scope.title = '';
            $scope.link = '';
        }
    }]);