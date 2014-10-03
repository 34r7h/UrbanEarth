angular.module('UrbanEarth', ['ui.bootstrap','ui.utils','ui.router','ngAnimate','mm.foundation', 'firebase']);
var app = angular.module('UrbanEarth');

app.config(function($stateProvider, $urlRouterProvider) {
// to be honest, a generator built the following else i'd have forEach'd them.
    $stateProvider.state('main', {
        abstract:true,
        templateUrl: 'partial/main/main.html'
    });
	$stateProvider.state('main.home', {
		url: '/',
		templateUrl: 'partial/home/home.html'
	});
    $stateProvider.state('main.teas', {
        url: '/teas',
        templateUrl: 'partial/teas/teas.html'
    });
    $stateProvider.state('main.about', {
        url: '/about',
        templateUrl: 'partial/about/about.html'
    });
    $stateProvider.state('main.specials', {
        url: '/specials',
        templateUrl: 'partial/specials/specials.html'
    });
    $stateProvider.state('main.programs', {
        url: '/programs',
        templateUrl: 'partial/programs/programs.html'
    });
    $stateProvider.state('main.contact', {
        url: '/contact',
        templateUrl: 'partial/contact/contact.html'
    });
    $stateProvider.state('main.wholesale', {
        url: '/wholesale',
        templateUrl: 'partial/wholesale/wholesale.html'
    });
    $stateProvider.state('main.tea', {
        url: '/teas/:tea',
        templateUrl: 'partial/tea/tea.html'
    });
    $stateProvider.state('main.special', {
        url: '/specials/:special',
        templateUrl: 'partial/special/special.html'
    });
    $stateProvider.state('main.program', {
        url: '/programs/:program',
        templateUrl: 'partial/program/program.html'
    });
    $stateProvider.state('main.admin', {
        url: '/admin',
        templateUrl: 'partial/admin/main.admin.html'
    });
    $stateProvider.state('main.customers', {
        url: '/customers',
        templateUrl: 'partial/customers/customers.html'
    });
    $stateProvider.state('main.customer', {
        url: '/customers/:customer',
        templateUrl: 'partial/customer/customer.html'
    });
    $stateProvider.state('main.orders', {
        url: '/orders',
        templateUrl: 'partial/orders/orders.html'
    });
    $stateProvider.state('main.order', {
        url: '/orders/:order',
        templateUrl: 'partial/order/order.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

app.run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
