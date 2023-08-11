<<<<<<< HEAD
var fs = require('fs');

var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, foods});
=======
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle});
>>>>>>> main
};

module.exports = {
    meals
<<<<<<< HEAD
};
=======
}
>>>>>>> main
