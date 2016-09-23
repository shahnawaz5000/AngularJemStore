(function() {

  var app = angular.module('store',['ngRoute','uiGmapgoogle-maps']);
  
  app.controller('StoreController',['$http',function($http){
  
  var store = this;
  
  store.products = [ ];
  
  $http.get('/products.json').success(function(data){
	store.products = data;
  });
  
  this.tab = 1;
  
  this.selectTab = function(setTab){
	this.tab = setTab; 
  };
  
  this.isSelected = function(checkTab){
	return this.tab === checkTab; 
  };
  
  	this.review = {};
  
	this.addReview = function(product){
		product.reviews.push(this.review);
	    this.review = {};
	};
	
  }]);
  
  
   app.controller('mainCtrl', function($scope) {
        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    }); 

  app.config(['$routeProvider',function($routeProvider){
  
	$routeProvider.
	when('/home',{
		
		templateUrl:'home.html',
	    css:'carousel.css'
	}).
	when('/productPage',{
	
		templateUrl:'productPage.html',
		controller:'StoreController',
		css:'style.css'
	}).
	when('/About',{
	
		templateUrl:'About.html'
		
	}).
	when('/Contact',{
	
		templateUrl:'Contact.html',
		controller:'mainCtrl',
		css:'map.css'
	}).
	otherwise({
	
		redirectTo:'/home'
	});
  
  }]);
})();

 
  
  /*
  
  HOW TO MAKE CUSTOM DIRECTIVE:-
  
  app.directive('productPanels',function(){
	
	return{
		restrict: 'E',
		templateUrl: 'product-panels.html',
		controller:function(){
			this.tab = 1;
  
            this.selectTab = function(setTab){
	        this.tab = setTab; 
            };
  
           this.isSelected = function(checkTab){
	        return this.tab === checkTab; 
           };	
		   },
		controllerAs: 'panel'
	};
  });
  
  */
  
  