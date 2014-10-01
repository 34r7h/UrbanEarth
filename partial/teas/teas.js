function TeasCtrl($scope, data){
this.test = 'Teas';
this.teas = data.data.teas;
}
app.controller('TeasCtrl',TeasCtrl);