var app = angular.module("demoApp", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('table', {
        url: '/',
        templateUrl: 'templates/tables.html',
        controller: 'tablesController'
    }).state('table.detail', {
        url: 'detail',
        templateUrl: 'templates/details.html',
        controller: 'detailController',
        params: { "route": null }
    })
    
})
