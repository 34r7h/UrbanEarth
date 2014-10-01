function MainCtrl($scope, data, api) {
	this.data = data.data;
	this.api = api;
}
app.controller('MainCtrl',MainCtrl);