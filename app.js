var app = angular.module("myApp",['ngResource']);

app.controller("myController",["$scope","$resource",function($scope,$http){
	$scope.message="Hello.........";
	$scope.getWeatherDetails=function(){
	$http("http://jsonplaceholder.typicode.com/posts/1")
	.get(function(response){
		console.log(response.data)
		$scope.message=response.data;
	})
}
}])



