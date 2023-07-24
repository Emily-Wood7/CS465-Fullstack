const mongoose = require('mongoose'); //.set('debug', true);
const Model = mongoose.model('foods');

// GET: /foods - lists all of the foods
const foodsList = async (req, res) => {
    Model
        .find({}) // empty filter for all
        .exec((err, foods) => {
            if (!foods) {
                return res
                    .status(404)
                    .json({ "message" : "foods not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(foods);
            }
        });
};

// GET: /foods/:foodCode - returns a single food
const foodsFindCode = async (req, res) => {
    Model
        .find({ 'code': req.params.foodCode })
        .exec((err, food) => {
            if (!food) {
                return res
                    .status(404)
                    .json({ "message": "food not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(202)
                    .json(food);
            }
        });
};

module.exports = {
    foodsList,
    foodsFindCode
};