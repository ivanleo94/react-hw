*/
'use strict';

module.exports = (app, db, approot) => {
    /*
        Set up the resource path for static files....
    
        The best source of information I could find on how to
        do this properly was found at - 
    
    var express = require('express');
    var path = require('path');
    app.use('/', express.static(path.join(approot, '/public')));
    
    /*
     
    */
    app.get('/favicon.ico', function(req, res) {
        console.log('standard.js - favicon.ico request, responding with 204');
        res.status(204).send('/favicon.ico does not exist');
    });

    // route all unknown paths to /index
    app.get('*',function (req, res) {
        console.log('Server - redirecting ['+req.route.path+'] to /index');
        res.redirect('/index');
    });
};
