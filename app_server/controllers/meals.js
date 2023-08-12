//var fs = require('fs');
//var foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

// const meals = (req, res) => {
//     pageTitle = process.env.npm_package_description + ' - meals';
//     res.render('meals', {title: pageTitle, foods});
// };

// module.exports = {
//     meals
// };

// render the meals list view
const renderMealsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Meals';
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No foods exist in our database!';
        }
    }
    res.render('meals',
        {
            title: pageTitle,
            foods: responseBody,
            message
        }
    );
}

// GET meals list view
const mealsList = (req, res) => {
    const path = '/api/foods';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> mealsController.mealsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderMealsList(req, res, body);
        }
    );
};

module.exports = {
    mealsList
};