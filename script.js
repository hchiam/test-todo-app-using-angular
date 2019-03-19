var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.newToDo = '';
  $scope.todos = [];
  $scope.todosTemp = [];
  $scope.add = function(todo) {
    if (todo) {
      $scope.todosTemp.push(todo);
      $scope.todos = angular.copy($scope.todosTemp);
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
  };
});
