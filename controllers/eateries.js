const { getAllEateries, getEateriesById } = require('../models/eateries');

function index(req, res, next) {
  const eateries = getAllEateries();
  res.render('eateries/list', { eateries });
};

function show(req, res, next) {
  const id = parseInt(req.params.id);
  const eatery = getEateriesById(id);
  if (!eatery) {
    next();
  } else {
    res.render(`eateries/${id}`, { eatery });
  }
};

module.exports = {
  index,
  show
};