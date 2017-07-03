angular.module("game").controller('jobCtrl', function($scope, jobSvc){



// $scope.getJobs = function(){
//     jobSvc.getJobs().then(function(response){
//     //  console.log(response);
//      $scope.jobs = response.data;
//     })
// }
// $scope.getJobs();

// $scope.getActions = function(){
//     jobSvc.getActions().then(function(response){
//         console.log(response);
        // $scope.actions = response.data
//     })
// }
// $scope.getActions();

$scope.sendData = function(jobs){
    jobSvc.postJobs(jobs).then(function(res) {
        // $scope.response = response.push("Thank you for your input!");
        console.log(res)
        
    })
}

$scope.sendFeedback = function(feedback){
    jobSvc.postFeedback(feedback).then(function(res){
        console.log(res)
    })
}

})



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