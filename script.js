var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$window', function($scope, $window) {
  $scope.newToDo = '';
  $scope.todos = [];
  $scope.todosTemp = [];
  $scope.init = function() {
    var haveCookieList = $window.localStorage.getItem('todos') != undefined;
    if (haveCookieList) {
      $scope.todos = JSON.parse($window.localStorage.getItem('todos'));
      $scope.todosTemp = JSON.parse($window.localStorage.getItem('todos'));
    } else {
      $scope.todos = [];
      $scope.todosTemp = [];
      $window.localStorage.setItem('todos', JSON.stringify([]));
    }
  };
  $scope.init();
  $scope.add = function(todo) {
    if (todo) {
      $scope.todosTemp.push(todo);
      $scope.todos = angular.copy($scope.todosTemp);
      $window.localStorage.setItem('todos', JSON.stringify($scope.todos));
      $scope.newToDo = '';
    }
  };
  $scope.edit = function(todo, index) {
    $scope.todosTemp[index] = todo;
    document.getElementById("todo-" + index).focus();
  };
  $scope.delete = function(index) {
    $scope.todosTemp.splice(index, 1);
    $scope.todos = angular.copy($scope.todosTemp);
    $window.localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
}]);