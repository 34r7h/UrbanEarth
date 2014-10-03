function CustomersCtrl($scope,data){
    this.test = 'Customers';
    this.customers = data.data.customers;
}
app.controller('CustomersCtrl',CustomersCtrl);