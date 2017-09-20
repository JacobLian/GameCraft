'use strict';

angular.module("game", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../core/views/home-view.html'
    }).state('ffjobs', {
        url: '/ffjobs',
        templateUrl: '../core/views/ffjobs.html'
    }).state('stats', {
        url: '/stats',
        templateUrl: '../core/views/stats.html'
    }).state('paladin', {
        url: '/ffjobs/paladin',
        templateUrl: '../core/views/jobpages/paladin.html'
    }).state('warrior', {
        url: '/ffjobs/warrior',
        templateUrl: '../core/views/jobpages/warrior.html'
    }).state('darkknight', {
        url: '/ffjobs/darkknight',
        templateUrl: '../core/views/jobpages/darkknight.html'
    }).state('monk', {
        url: '/ffjobs/monk',
        templateUrl: '../core/views/jobpages/monk.html'
    }).state('dragoon', {
        url: '/ffjobs/dragoon',
        templateUrl: '../core/views/jobpages/dragoon.html'
    }).state('ninja', {
        url: '/ffjobs/ninja',
        templateUrl: '../core/views/jobpages/ninja.html'
    }).state('samurai', {
        url: '/ffjobs/samurai',
        templateUrl: '../core/views/jobpages/samurai.html'
    }).state('bard', {
        url: '/ffjobs/bard',
        templateUrl: '../core/views/jobpages/bard.html'
    }).state('machinist', {
        url: '/ffjobs/machinist',
        templateUrl: '../core/views/jobpages/machinist.html'
    }).state('blackmage', {
        url: '/ffjobs/blackmage',
        templateUrl: '../core/views/jobpages/blackmage.html'
    }).state('summoner', {
        url: '/ffjobs/summoner',
        templateUrl: '../core/views/jobpages/summoner.html'
    }).state('redmage', {
        url: '/ffjobs/redmage',
        templateUrl: '../core/views/jobpages/redmage.html'
    }).state('whitemage', {
        url: '/ffjobs/whitemage',
        templateUrl: '../core/views/jobpages/whitemage.html'
    }).state('scholar', {
        url: '/ffjobs/scholar',
        templateUrl: '../core/views/jobpages/scholar.html'
    }).state('astrologian', {
        url: '/ffjobs/astrologian',
        templateUrl: '../core/views/jobpages/astrologian.html'
    });
});
'use strict';

function hideFeed() {
    console.log('hello');
    var x = document.getElementById('hideFeed');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
"use strict";

angular.module("game").controller('jobCtrl', function ($scope, jobSvc) {

    $scope.sendData = function (jobs) {
        console.log(jobs);
        jobSvc.postJobs(jobs).then(function (response) {
            console.log(response);
        });
        // jobSvc.postJobs(jobs).then(function(res) {
        //     // $scope.response = response.push("Thank you for your input!");
        //     console.log(res)

        // })
    };

    $scope.sendFeedback = function (feedback) {
        jobSvc.postFeedback(feedback).then(function (res) {
            console.log(res);
        });
    };

    $scope.getActions = function () {
        jobSvc.getActions().then(function (response) {
            console.log(response);
            $scope.actions = response;
        });
    };
    $scope.getActions();

    $scope.getJobs = function () {
        jobSvc.getJobs().then(function (response) {
            console.log(response);
            $scope.jobs = response.data;
        });
    };
    $scope.getJobs();
});

// $scope.jobName = "";
// $scope.addDesc = function( event ){
//     if ( event.keyCode == 13 ){
//         $http.post('/jobdescrip', {text:$scope.jobName}).success(function(data){
//                 $scope.response = "Thank you for your input";
//                 $scope.jobName = "";
//         })
//     } 
// }
// $scope.new_desc = "";
// $scope.addDesc = function( event ){
//     if ( event.keyCode == 13 ){
//         $http.post('/jobdescrip', {text:$scope.new_desc}).success(function(data){
//                 $scope.response = "Thank you for your input";
//                 $scope.new_desc = "";
//         })
//     }

// }
"use strict";
"use strict";
// window.ready()
//     var btn = document.querySelector('.button');
//     btn.on('click', function(e){
//         e.preventDefault();
//     });
"use strict";
'use strict';

angular.module("game").service('jobSvc', function ($http) {

    this.getJobs = function () {
        return $http.get('http://garlandtools.org/db/');
    };
    this.getActions = function () {
        return $http.get('https://api.xivdb.com/action');
    };

    this.postJobs = function (job) {
        return $http({
            url: 'http://localhost:3000/jobdescrip',
            method: 'POST',
            data: job
        }).then(function (response) {
            console.log('service: ', response);
            return response;
        }).catch(function (err) {
            console.log("service err: ", err);
            return err;
        });
    };

    this.postFeedback = function (feedback) {
        $http({
            url: 'http://localhost:3000/feedback',
            method: 'POST',
            data: feedback
        });
    };
});