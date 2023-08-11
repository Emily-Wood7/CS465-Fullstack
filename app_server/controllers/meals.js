<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
var fs = require('fs');

var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, foods});
<<<<<<< HEAD
=======
=======
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle});
>>>>>>> main
>>>>>>> main
};

module.exports = {
    meals
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
}
>>>>>>> main
>>>>>>> main
