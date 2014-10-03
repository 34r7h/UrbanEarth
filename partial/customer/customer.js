function CustomerCtrl($scope, $state, $firebase){
    this.state = $state.params.customer;
    var ref = new Firebase("https://urban.firebaseio.com/index/customers/"+this.state);
    ref.on('value', function (snapshot) {
        var itemID = snapshot.val();
        var itemRef = new Firebase("https://urban.firebaseio.com/customers/"+itemID);
        var sync = $firebase(itemRef);
        $scope.singleData = sync.$asObject();

    });
    this.test = 'A Single Customer';
    console.log(this.singleData);

}
app.controller('CustomerCtrl',CustomerCtrl);