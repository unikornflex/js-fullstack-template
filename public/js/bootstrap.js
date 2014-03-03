(function() {

    // define env here


    requirejs.config({
        baseUrl: 'js',
        urlArgs: 'bust=' + new Date().getTime(),
        shim: {
            backbone: {
                deps: ['jquery', 'underscore'],
                exports: 'Backbone'
            },
            jquery: {
                exports: '$'
            },
            underscore: {
                exports: '_'
            }
        },
        paths: {
            jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min', 'vendors/jquery/jquery.min'],
            underscore: 'vendors/underscore/underscore',
            backbone: 'vendors/backbone/backbone',
            text: 'vendors/requirejs-text/text',
            templates: '../templates'
        },
    });

    require(['main'], function() {
        console.log('   - app launched');
    });
}());
