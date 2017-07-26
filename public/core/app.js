angular.module("game", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../core/views/home-view.html'
    })
    .state('ffjobs', {
        url: '/ffjobs',
        templateUrl:'../core/views/ffjobs.html'
    })
    .state('stats', {
        url: '/stats',
        templateUrl:'../core/views/stats.html'
    })
    .state('paladin', {
        url: '/ffjobs/paladin',
        templateUrl:'../core/views/jobpages/paladin.html'
    })
    .state('warrior', {
        url: '/ffjobs/warrior',
        templateUrl:'../core/views/jobpages/warrior.html'
    })
    .state('darkknight', {
        url: '/ffjobs/darkknight',
        templateUrl:'../core/views/jobpages/darkknight.html'
    })
    .state('monk', {
        url: '/ffjobs/monk',
        templateUrl:'../core/views/jobpages/monk.html'
    })
    .state('dragoon', {
        url: '/ffjobs/dragoon',
        templateUrl:'../core/views/jobpages/dragoon.html'
    })
    .state('ninja', {
        url: '/ffjobs/ninja',
        templateUrl:'../core/views/jobpages/ninja.html'
    })
    .state('samurai', {
        url: '/ffjobs/samurai',
        templateUrl:'../core/views/jobpages/samurai.html'
    })
    .state('bard', {
        url: '/ffjobs/bard',
        templateUrl:'../core/views/jobpages/bard.html'
    })
    .state('machinist', {
        url: '/ffjobs/machinist',
        templateUrl:'../core/views/jobpages/machinist.html'
    })
    .state('blackmage', {
        url: '/ffjobs/blackmage',
        templateUrl:'../core/views/jobpages/blackmage.html'
    })
    .state('summoner', {
        url: '/ffjobs/summoner',
        templateUrl:'../core/views/jobpages/summoner.html'
    })
    .state('redmage', {
        url: '/ffjobs/redmage',
        templateUrl:'../core/views/jobpages/redmage.html'
    })
    .state('whitemage', {
        url: '/ffjobs/whitemage',
        templateUrl:'../core/views/jobpages/whitemage.html'
    })
    .state('scholar', {
        url: '/ffjobs/scholar',
        templateUrl:'../core/views/jobpages/scholar.html'
    })
    .state('astrologian', {
        url: '/ffjobs/astrologian',
        templateUrl:'../core/views/jobpages/astrologian.html'
    })
})