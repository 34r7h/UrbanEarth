function OrdersCtrl($scope,data){
    this.test = 'Orders';
    this.orders = data.data.orders;
}
app.controller('OrdersCtrl',OrdersCtrl);