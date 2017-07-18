angular.module("game").service('jobSvc', function($http){


    
     this.getJobs = function(){
        return $http.get('https://api.xivdb.com/data/classjobs')
    }
    this.getActions = function(){
        return $http.get('https://api.xivdb.com/action')
    }

    this.postJobs = function(job){
      return $http({
            url: 'http://localhost:3000/jobdescrip',
            method: 'POST',
            data: job
        }).then(function(response) {
            console.log('service: ', response)
            return response
        }).catch(function(err){
            console.log("service err: ", err)
            return err
        })
    }
   

   this.postFeedback = function(feedback){
       $http({
           url: 'http://localhost:3000/feedback',
           method: 'POST',
           data: feedback
       })
   }


    })