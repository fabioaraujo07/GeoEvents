const express = require('express')
const mongoose = require('mongoose')
var router = express.Router();
var authController = require('../controllers/authController')

const User = require('../models/user');
const Event = require('../models/event');
const Local = require('../models/local');
const Ticket = require('../models/ticket');
const Sale = require('../models/sale');

async function searchInfo() {

  const numUsers = await User.countDocuments();
  const numEvents = await Event.countDocuments();
  const numLocals = await Local.countDocuments();
  const numTickets = await Ticket.countDocuments();
  const numSales = await Sale.countDocuments();

  return {
    numUsers: numUsers,
    numEvents: numEvents,
    numLocals: numLocals,
    numTickets: numTickets,
    numSales: numSales
  };
}

router.get('/', authController.verifyAuth ,async (req, res) => {
  try {
    const informations = await searchInfo();

    res.render('dashboard.ejs', informations);
  } catch (error) {
    res.render('error')
  }
});

module.exports = router;