<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
<<<<<<< HEAD
=======
=======
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle});
>>>>>>> main
>>>>>>> main
};

module.exports = {
    travel
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
}
>>>>>>> main
>>>>>>> main
