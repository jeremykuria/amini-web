(function () {
    'use strict';

    angular
        .module('aminiApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                'navbar@': {
                    templateUrl: 'layouts/navbar/navbar.html',
                    // controller: 'NavbarController',
                    // controllerAs: 'vm'
                }
            },
            resolve: {}
        });
    }
})();
