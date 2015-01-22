var React = require('react');

var RoomList = React.createClass({
    render: function() {
        var rooms = this.state.rooms.map(function(room) {
            return (
                <div>
                    <a href="#">{room}</a>
                </div>
            );
        });

        return (
            <div>
                <h1>Chat rooms</h1>
                {rooms}
                <form onSubmit={this.postRoom} className="input-group">
                    <input placeholder="Chat room name" ref="name" type="text" className="form-control" />
                    <div className="input-group-btn">
                        <button type="submit" className="btn btn-default">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;
                            Create new chat room
                        </button>
                    </div>
                </form>
            </div>
        );
    },
    getInitialState: function() {
        return {rooms: []};
    },
    componentDidMount: function() {
        $.getJSON('/rooms', function(response) {
            this.setState({rooms: response})
        }.bind(this));
    },
    postRoom: function(event) {
        event.preventDefault();
        var nameNode = this.refs.name.getDOMNode();
        var name = nameNode.value.trim();
        if (!name) {
            return;
        }
        nameNode.value = '';
        var room = {name: name};
        $.post('/rooms', room);
        this.setState({rooms: this.state.rooms.concat([room])});
    }
});

module.exports = RoomList;