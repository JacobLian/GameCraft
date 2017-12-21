angular.module("game").controller('jobCtrl', function($scope, jobSvc){

    $scope.info = jobSvc.info()

    $scope.jobinfo = function(job){
        jobSvc.getInfo(job).then(function(response){
            console.log(response)
        })
    }

    $scope.getActions = function(){
        jobSvc.getActions().then(function(response){
            console.log(response);
            $scope.actions = response.data.help
        })
    }
    $scope.getActions();


    $scope.getJobs = function(){
        jobSvc.getJobs().then(function(response){
        console.log(response);
        $scope.jobs = response.data.action.en.description;
        })
    }
    $scope.getJobs();



    $scope.sendData = function(jobs){
        console.log(jobs)
        jobSvc.postJobs(jobs).then(function(response){
            console.log(response)
        })
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