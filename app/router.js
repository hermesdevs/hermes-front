hermes.config(function($stateProvider , $urlRouterProvider,$httpProvider){

    function wherever_we_are(are) {
        var are = window.location;
        return are.origin + are.pathname;
    }
    $urlRouterProvider.otherwise('/');
    $stateProvider    
        // ------------ COMPRAME -------------
        .state('index', {
            url: '/',
            templateUrl: wherever_we_are() + 'view/login.html',
            controller:'login_controller'
        })
        // ------------ Auth -------------
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
        .state('register_admin', {
            url: '/register/admin',
            templateUrl: wherever_we_are() + 'view/register_admin.html',
            controller:'register_admin_controller'
        })
        // ------------ CONTROL -------------
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: wherever_we_are() + 'view/dashboard.html',
            controller:'dashboard_controller'
        })
        // ------------ CONTROL SIMPLE -------------
        .state('servidores', {
            url: '/servidores',
            templateUrl: wherever_we_are() + 'view/servidores.html',
            controller:'servidores_controller'
        })        
        .state('switches', {
            url: '/switches',
            templateUrl: wherever_we_are() + 'view/switches.html',
            controller:'switches_controller'
        })
        .state('equipos', {
            url: '/equipos',
            templateUrl: wherever_we_are() + 'view/equipos.html',
            controller:'equipos_controller'
        })
        // ------------ Configuraciones -------------
        .state('settings', {
            url: '/settings',
            templateUrl: wherever_we_are() + 'view/settings.html',
            controller:'settings_controller'
        })
        .state('profile', {
            url: '/me',
            templateUrl: wherever_we_are() + 'view/profile.html',
            controller:'profile_controller'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: wherever_we_are() + 'view/admin.html',
            controller:'admin_controller'
        })
        .state('single_user', {
            url: '/admin/:id',
            templateUrl: wherever_we_are() + 'view/single-user.html',
            controller:'single_user_controller'
        })
        // ------------ CONTROL COMPLEJO -------------
        .state('net', {
            url: '/conexiones',
            templateUrl: wherever_we_are() + 'view/net.html',
            controller:'net_controller'
        })
        // ------------ CONTROL COMPLEJO DE RECURSOS UNICOS -------------
        .state('single_switche', {
            url: '/switches/:id',
            templateUrl: wherever_we_are() + 'view/single-switches.html',
            controller:'single_switches_controller'
        })
        .state('single_equipo', {
            url: '/equipos/:id',
            templateUrl: wherever_we_are() + 'view/single-equipos.html',
            controller:'single_equipos_controller'
        })
        .state('single_servidores', {
            url: '/servidores/:id',
            templateUrl: wherever_we_are() + 'view/single-servidores.html',
            controller:'single_servidores_controller'
        })
});
