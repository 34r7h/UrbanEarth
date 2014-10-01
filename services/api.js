angular.module('UrbanEarth').factory('api',function(data) {
	var api = {};

	api.create = {
		tea: function(name, price, wholesalePrice, description, benefits, images){
			var teaURL = name.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
			data.sync['teas'].$push({name:name,price:price,wholesalePrice:wholesalePrice,description:description,benefits:benefits,images:images, url:teaURL}).then(function(newChildRef) {
				var newID =  newChildRef.name();
				console.log(data.data.index.teas);
				data.data.index.teas.$set(teaURL,newID);
				console.log("added record with id " + newChildRef.name());
			});
		},
		program: function(){},
		special:function(){},
		customer:function(){},
		order:function(){},
		image:function(){}
	};
	api.update = {
		tea: function(){},
		program: function(){},
		special:function(){},
		customer:function(){},
		order:function(){},
		image:function(){}
	};
	api.remove = {
		tea: function(){},
		program: function(){},
		special:function(){},
		customer:function(){},
		order:function(){},
		image:function(){}
	};
	api.filter = {
		tea: function(){},
		program: function(){},
		special:function(){},
		customer:function(){},
		order:function(){},
		image:function(){}
	};

	return api;
});