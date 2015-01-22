var router = require('express').Router();

var rooms = [];

router.get('/', function(request, response) {
    response.send(rooms);
});

router.post('/', function(request, response) {
    rooms.push(request.body);
    response.sendStatus(201);
});

module.exports = router;