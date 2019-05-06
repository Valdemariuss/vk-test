const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});

app.get('*', function(req, res) {
    res.json({"welcome"});
});