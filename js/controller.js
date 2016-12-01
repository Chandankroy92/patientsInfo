app.controller('myCtrl',['$scope','$localStorage','$location',function($scope, $localStorage,$location){
        
         $scope.init = function() {
                if($localStorage.PatientStorage == undefined) {
                    $localStorage.PatientStorage = [];
                }
            };
        $scope.init();
        
         $scope.save = function(fname,lname,age,dob,gender,phone,add) {
             $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
            var pInfo ={
                fname : $scope.fname,
                lname : $scope.lname,
                age : $scope.age,
                dob : $scope.dob,
                gender : $scope.gender,
                phone : $scope.phone, 
                add : $scope.add
            }
            $localStorage.PatientStorage.push(pInfo);
            console.log($localStorage.PatientStorage);
        };
    
        $scope.goto_search = function() {
         $location.path('/location');
        }
        
         
    }]);

app.controller('locationCtrl',['$scope','$localStorage','$route', function($scope, $localStorage, $route){
        
        $scope.patients=$localStorage.PatientStorage;
        
        $scope.removeProduct = function(index){
            $scope.patients.splice(index,1);
        }
        
        $scope.clearAll = function(){
            $localStorage.$reset();
            $route.reload();
   }        

}]);
    
