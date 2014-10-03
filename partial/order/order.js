function OrderCtrl($scope, $state, $firebase){
    this.state = $state.params.order;
    var ref = new Firebase("https://urban.firebaseio.com/index/orders/"+this.state);
    ref.on('value', function (snapshot) {
        var itemID = snapshot.val();
        var itemRef = new Firebase("https://urban.firebaseio.com/orders/"+itemID);
        var sync = $firebase(itemRef);
        $scope.singleData = sync.$asObject();

    });
    this.test = 'A Single Order';
    console.log(this.singleData);

}
app.controller('OrderCtrl',OrderCtrl);