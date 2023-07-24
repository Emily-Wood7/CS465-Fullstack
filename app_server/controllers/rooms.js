//var fs = require('fs');
//var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// const rooms = (req, res) => {
//     pageTitle = process.env.npm_package_description + ' - rooms';
//     res.render('rooms', {title: pageTitle, rooms});
// };

// module.exports = {
//     rooms
// };

// render the rooms list view
const renderRoomsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Rooms';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No rooms exist in our database!';
        }
    }
    res.render('rooms',
        {
            title: pageTitle,
            room: responseBody,
            message
        }
    );
}

// GET rooms list view
const roomsList = (req, res) => {
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> roomsController.roomsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderRoomsList(req, res, body);
        }
    );
};

module.exports = {
    roomsList
};