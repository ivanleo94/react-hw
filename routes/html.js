module.exports = function(app, db, approot) {
    var path = require('path');
    /*
        GET /index - responds with the index/landing page
    */
    app.get('/index', function(req, res) {
        res.sendFile(path.join(approot, '/public/index.html'));
    });
};
