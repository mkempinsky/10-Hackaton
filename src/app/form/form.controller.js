(function() { // John Papa style of creating a module.
    'use strict'; // Ensures no undeclared variables.

    angular
        // Connect to the formApp module.
        .module('formApp') 
        // Create a controller to connect to the form, name it formController. Add it as 2nd argument dependency.
        .controller('formController', formController); 

    // Inject the newly created businessFactory and the required $stateParams into the companyController 
    formController.$inject = ['businessFactory', '$stateParams'];

    /* @ngInject */
    function formController(businessFactory, $stateParams) {
        var vm = this; //jshint ignore:line
        vm.company = '';
        vm.userInput = userInput;
        
        ////////////////

        function userInput(info) {
        	var upperCaseTicker = vm.company;
	        businessFactory.getBusinessNews(info).then(
	        	function(data) {
	        		vm.companyData = data;
	        		console.log(data);
	        	},

	        	function(error) {
                    console.log(error);
                });
	        		
    	}
    }	
})();
