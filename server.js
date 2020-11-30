const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.route('/users')
    .get(function (request, response) {
        const users = [{
            id: 1,
            name: 'Daniel'
        }, {
            id: 2,
            name: 'Paul'
        }];

        response.json(users);
    });

const server = app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

module.exports = server;