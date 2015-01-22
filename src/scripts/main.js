var React = require('react');
var RoomList = require('./views/RoomList');

React.render(
    <RoomList rooms={['asdf', '123']} />,
    document.getElementById('content')
);