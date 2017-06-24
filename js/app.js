var app = angular.module("emirates", ['angucomplete-alt'], function(){

});

app.controller("QuestionareCtrl", function($scope, $http){

    $scope.step1 = null;
	$scope.step2 = null;
	$scope.step3 = null;
	$scope.step4 = null;
	$scope.step5 = null;
	$scope.step6 = null;
	
	$scope.questionary = {}

	$scope.answer = function(step, model){

		 switch (step) {
            case 'step1':
            Object.keys(model).forEach(function (key) {
				 if(typeof model[key] === 'undefined' || typeof model[key] === ''){
				    delete model[key];
				  }
				});
                  $scope.step1 = model;
                break;
            case 'step2':
                Object.keys(model).forEach(function (key) {
				 if(typeof model[key] === 'undefined' || typeof model[key] === ''){
				    delete model[key];
				  }
				});
                  $scope.step2 = model;
                break;
			case 'step3':
                Object.keys(model).forEach(function (key) {
				 if(typeof model[key] === 'undefined' || typeof model[key] === ''){
				    delete model[key];
				  }
				});
                  $scope.step3 = model;
                break;
            case 'step4':
                Object.keys(model).forEach(function (key) {
				 if(typeof model[key] === 'undefined'|| typeof model[key] === ''){
				    delete model[key];
				  }
				});
                  $scope.step4 = model;
                break;
            case 'step5':
                Object.keys(model).forEach(function (key) {
				 if(typeof model[key] === 'undefined' || typeof model[key] === ''){
				    delete model[key];
				  }
				});
                  $scope.step5 = model;
                break;

            default:

        }
        
	}

	$scope.submitButton = function(contact){

		$scope.questionary = {
	   		step1: $scope.step1,
	   		step2: $scope.step2,
	   		step3: $scope.step3,
	   		step4: $scope.step4,
	   		step5: $scope.step5,
	   		step6: $scope.step6,
	   		contact:contact
   		};

	$http({
		method: 'POST', //CHANGE THIS FROM GET TO POST
		url: 'mail_questionary.php?f=questionary',
		params:  $scope.questionary, //USE PROPER JAVASRIPT OBJECTS
		
		headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		}

		}) .then(function (response) {
            	$.notify(response.data, "success");
        })
	}
});

app.controller("ContactCtrl", function($http, $scope){

	console.log("hini");
 	
	$scope.sendMail = function(contact){

	$http.get("mail.php?f=mailer")
        .then(function (response) {
            console.log(response);

        });
	}

});

app.controller("SearchCtrl", function($scope, $window, $log){

    $scope.go = function ( path ) {
        var url = "http://" + $window.location.host +"/" + path;
        $log.log(url);
        $window.location.href = url;
    };

    $scope.datas = [
        {	name: 'Home', link: 'index.php'},
		{	name: 'Our Story', link: 'our_story.php'},
        {   name: 'Career', link: 'career.php'},
        {   name: 'Blog', link: 'blog.php'},
        {   name: 'Website', link: 'website.php'},
        {   name: 'Branding', link: 'branding.php'},
        {   name: 'Pricing', link: 'pricing.php'},
        {   name: 'Portfolio', link: 'portfolio_main.php'},
        {   name: 'Contact', link: 'contact.php'},
        {   name: 'Swiss Canonica UAE', link: 'portfolio/portfolio9.php'},
        {   name: 'Taxexperts', link: 'portfolio/portfolio10.php'},
        {   name: 'Emirates Landscape', link: 'portfolio/portfolio5.php'},
        {   name: 'Utopia', link: 'portfolio/portfolio1.php'},
        {   name: 'Horizon Drone', link: 'portfolio/portfolio12.php'},
        {   name: 'Nationality Advisor', link: 'portfolio/portfolio7.php'},
        {   name: 'Arborec', link: 'portfolio/portfolio3.php'},
        {   name: 'Swiss Canonica Chocolate', link: 'portfolio/portfolio4.php'},
        {   name: 'Medicorp', link: 'portfolio/portfolio6.php'},
        {   name: 'Swiss Canonica World', link: 'portfolio/portfolio8.php'},
        {   name: 'UAE Staff', link: 'portfolio/portfolio11.php'},
    ];

    $scope.dataSelected = function(selected) {
        $scope.go(selected.originalObject.link);
    };


});


