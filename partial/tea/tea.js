function TeaCtrl($scope, $state, $firebase){
	this.state = $state.params.tea;
	var ref = new Firebase("https://urban.firebaseio.com/index/teas/"+this.state);
	ref.on('value', function (snapshot) {
		var itemID = snapshot.val();
		var itemRef = new Firebase("https://urban.firebaseio.com/teas/"+itemID);
		var sync = $firebase(itemRef);
		var singleData = sync.$asObject();
		return this.singleData;
	});
	this.test = 'A Single Tea';
	console.log(this.singleData);

}
app.controller('TeaCtrl',TeaCtrl);