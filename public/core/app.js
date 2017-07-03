angular.module("game", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: './core/views/home-view.html',

    })
    .state('ffjobs', {
        url: '/ffjobs',
        templateUrl:'./core/views/ffjobs.html'
    })
    .state('paladin', {
        url: '/ffjobs/paladin',
        templateUrl:'./core/views/paladin.html'
    })
    .state('warrior', {
        url: '/ffjobs/warrior',
        templateUrl:'./core/views/warrior.html'
    })
    .state('darkknight', {
        url: '/ffjobs/darkknight',
        templateUrl:'./core/views/darkknight.html'
    })
    .state('monk', {
        url: '/ffjobs/monk',
        templateUrl:'./core/views/monk.html'
    })
    .state('dragoon', {
        url: '/ffjobs/dragoon',
        templateUrl:'./core/views/dragoon.html'
    })
    .state('ninja', {
        url: '/ffjobs/ninja',
        templateUrl:'./core/views/ninja.html'
    })
    .state('samurai', {
        url: '/ffjobs/samurai',
        templateUrl:'./core/views/samurai.html'
    })
    .state('bard', {
        url: '/ffjobs/bard',
        templateUrl:'./core/views/bard.html'
    })
    .state('machinist', {
        url: '/ffjobs/machinist',
        templateUrl:'./core/views/machinist.html'
    })
    .state('blackmage', {
        url: '/ffjobs/blackmage',
        templateUrl:'./core/views/blackmage.html'
    })
    .state('summoner', {
        url: '/ffjobs/summoner',
        templateUrl:'./core/views/summoner.html'
    })
    .state('redmage', {
        url: '/ffjobs/redmage',
        templateUrl:'./core/views/redmage.html'
    })
    .state('whitemage', {
        url: '/ffjobs/whitemage',
        templateUrl:'./core/views/whitemage.html'
    })
    .state('scholar', {
        url: '/ffjobs/scholar',
        templateUrl:'./core/views/scholar.html'
    })
    .state('astrologian', {
        url: '/ffjobs/astrologian',
        templateUrl:'./core/views/astrologian.html'
    })
})