angular.module('UrbanEarth').factory('api',function(data) {
	var api = {};

	api.create = {
		tea: function(name, price, wholesalePrice, description, benefits, images){
			var teaURL = name.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
			data.sync['teas'].$push({name:name,price:price,wholesalePrice:wholesalePrice,description:description,benefits:benefits,images:images, url:teaURL}).then(function(newChildRef) {
				var newID =  newChildRef.name();
				data.data.index.teas.$set(teaURL,newID);
			});
		},
		program: function(name, price, description, benefits, images){
            var programURL = name.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
            data.sync['programs'].$push({name:name,price:price,description:description,benefits:benefits,images:images, url:programURL}).then(function(newChildRef) {
                var newID =  newChildRef.name();
                data.data.index.programs.$set(programURL,newID);
            });
        },
		special:function(name, price, description, benefits, images){
            var specialURL = name.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
            data.sync['specials'].$push({name:name, price:price, description:description, benefits:benefits, images:images, url:specialURL}).then(function(newChildRef) {
                var newID =  newChildRef.name();
                data.data.index.specials.$set(specialURL,newID);
            });
        },
		customer:function(firstName, lastName, email, streetNumber, streetName, postalCode, phone, image){
            var customerURL = email.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
            data.sync['customers'].$push({firstName:firstName, lastName:lastName, email:email, streetNumber:streetNumber, streetName:streetName, postalCode:postalCode, phone:phone, image:image, url:customerURL}).then(function(newChildRef) {
                var newID =  newChildRef.name();
                data.data.index.customers.$set(customerURL,newID);
            });
        },
		order:function(orderNumber, items, total){
            var orderURL = orderNumber.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
            data.sync['orders'].$push({orderNumber:orderNumber, items:items, total:total, url:orderURL}).then(function(newChildRef) {
                var newID =  newChildRef.name();
                data.data.index.orders.$set(orderURL,newID);
            });
        },
		image:function(name, description){
            var imageURL = name.toLowerCase().replace(/'+/g, '').replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '');
            data.sync['images'].$push({name:name, description:description, url:imageURL}).then(function(newChildRef) {
                var newID =  newChildRef.name();
                data.data.index.images.$set(imageURL,newID);
            });
        }
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