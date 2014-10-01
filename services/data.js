angular.module('UrbanEarth').factory('data',function($firebase) {
	var data = {ref:{},sync:{},data:{index:{}},index:{}};
	var models = ['teas','programs','specials','customers','orders','images'];
	angular.forEach(models, function(model){
		data.ref[model]=new Firebase('https://urban.firebaseio.com/'+model);
		data.sync[model] = $firebase(data.ref[model]);
		data.data[model] = data.sync[model].$asObject();
		data.index[model] = new Firebase('https://urban.firebaseio.com/index/'+model);
		data.data.index[model] = $firebase(data.index[model]);
	});
	return data;
});