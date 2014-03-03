define(
    [
        'backbone', 'underscore', 'jquery',
        'text!templates/test.tmpl'
    ],
    function(Backbone, _, $, tmpl) {

        'use strict';

        console.log(Backbone);
        console.log(_);
        console.log($);

        // test templating
        var html = _.template(tmpl, { test: ['the', 'famous', 'yiking', '!'] });
        $('body').append(html);
    }
)
