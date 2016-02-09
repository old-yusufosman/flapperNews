var app= angular.module('flapperNews', []);
console.log('test')

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
        $scope.test = 'Hello world!';
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
            $scope.$watch('posts', function() {
                alert(posts.posts);
            });
        }
    }]);