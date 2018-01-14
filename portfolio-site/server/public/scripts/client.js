var myApp = angular.module('myApp',  ['ngRoute', 'ngMaterial', 'ngMessages']);
myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
$mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
        'default': '400', // by default use shade 400 from the pink palette for primary intentions
        'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
        'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
        'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('amber', {
        'default': '200' // use shade 200 for default, and keep all other shades the same
    })

    .warnPalette('deep-orange', {
        'default': '400' // use shade 200 for default, and keep all other shades the same
    });

    $routeProvider
        .when('/landing', {
            templateUrl: '/portfolio-site/server/public/views/landing.html',
            controller: 'MaterialController as mc',
        }).otherwise({
            redirectTo: '/landing'
        });

});



