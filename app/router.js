hermes.config(function($stateProvider , $urlRouterProvider,$httpProvider){

    function wherever_we_are(are) {
        var are = window.location;
        return are.origin + are.pathname;
    }
    $urlRouterProvider.otherwise('/');
    $stateProvider    
        .state('index', {
            url: '/',
            templateUrl: wherever_we_are() + 'view/login.html',
            controller:'login_controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: wherever_we_are() + 'view/login.html',
            controller:'login_controller'
        })
        .state('forget', {
            url: '/forget',
            templateUrl: wherever_we_are() + 'view/forget.html',
            controller:'forget_controller'
        })
        .state('register', {
            url: '/register',
            templateUrl: wherever_we_are() + 'view/register.html',
            controller:'register_controller'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: wherever_we_are() + 'view/dashboard.html',
            controller:'dashboard_controller'
        })
        .state('servidores', {
            url: '/servidores',
            templateUrl: wherever_we_are() + 'view/servidores.html',
            controller:'servidores_controller'
        })        
        .state('equipos', {
            url: '/equipos',
            templateUrl: wherever_we_are() + 'view/equipos.html',
            controller:'equipos_controller'
        })
        .state('switches', {
            url: '/switches',
            templateUrl: wherever_we_are() + 'view/switches.html',
            controller:'switches_controller'
        })
        .state('single_switche', {
            url: '/switches/:id',
            templateUrl: wherever_we_are() + 'view/single-switches.html',
            controller:'single_switches_controller'
        })
});
