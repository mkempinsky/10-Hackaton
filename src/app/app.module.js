(function() {
    'use strict';

    angular
        .module('formApp', ['ui.router'])
        .config(function($urlRouterProvider, $stateProvider) {

        	$urlRouterProvider.otherwise('/');

        	$stateProvider
        		.state('form', {
        			url: '/form',
        			templateUrl: '/app/form/form.html',
        			controller: 'formController as formCtrl'
        		})
        		.state('company', {
        			url: '/company/:businessName',
        			templateUrl: '/app/company/company.html',
        			controller: 'companyController as companyCtrl'
        		});
        });  
})();