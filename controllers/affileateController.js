const Affiliate = require("../models/model-affiliate");

exports.save = async (req, res) => {

};

exports.update = async (req, res) => {

};

exports.findAll = async (req, res) => {

};

exports.findById = async (req, res) => {

};

exports.findId = async (req, res) => {

};

exports.deleteClient = async (req, res) => {

};

const validateEmail = (correo) => {
  var expresionRegularCorreo =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return expresionRegularCorreo.test(correo);
};
const validateCelPhone = (phone) => {
  var phoneExpresion = /^[0-9]{10}$/;
  return phoneExpresion.test(phone);
};
