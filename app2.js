var app = angular.module("myApp",['ngResource']);

app.controller("myController",["$scope","$resource",function($scope,$resource){
	$scope.message="Hello.........";
	$scope.getWeatherDetails=function(){
	$resource("http://jsonplaceholder.typicode.com/posts/1")
	.get(function(data){
		console.log(data)
		
	})
}
}])




