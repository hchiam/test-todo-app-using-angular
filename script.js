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
    $scope.todos = angular.copy($scope.todosTemp);
    $window.localStorage.setItem('todos', JSON.stringify($scope.todos));
    document.getElementById("todo-" + index).focus();
    $scope.isEditing = index;
  };
  $scope.notEditing = function() {
    $scope.isEditing = -1;
  };
  $scope.delete = function(index) {
    $scope.todosTemp.splice(index, 1);
    $scope.todos = angular.copy($scope.todosTemp);
    $window.localStorage.setItem('todos', JSON.stringify($scope.todos));
  };
  $scope.goToInputField = function() {
    document.getElementById('new-to-do-input').focus();
  };
}]);



///////////////////////////////////

document.getElementById('repeat').innerHTML = "Try a sentence with words like 'click'/'type'/'check' in it.";

function update() {
  var newText = document.getElementById('input').value;
  newText = lowercaseFirstLetter(newText);
  newText = highlight(newText, 'click', 'blue');
  newText = highlight(newText, 'hit', 'blue');
  newText = highlight(newText, 'type', 'brown');
  newText = highlight(newText, 'enter', 'brown');
  newText = highlight(newText, 'check', 'green');
  newText = highlight(newText, 'verify', 'green');
  document.getElementById('repeat').innerHTML = newText;
}

function highlight(sentence, word, color) {
  return sentence.replace(
    word, // new RegExp(word, 'g'), 
    '<span style="color:' + color + ';">' + word + '</span>'
  );
}

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}