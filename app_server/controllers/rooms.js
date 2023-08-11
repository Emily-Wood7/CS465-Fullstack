<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
var fs = require('fs');

var room = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, room});
<<<<<<< HEAD
=======
=======
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle});
>>>>>>> main
>>>>>>> main
};

module.exports = {
    rooms
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
}
>>>>>>> main
>>>>>>> main
