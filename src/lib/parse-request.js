'use strict';

const url = require('url');
const queryString = require('querystring');

let parser = module.exports = {};

parser.execute = (req) => {

  if ( !req || !req.url ) { 
    return; 
  }

  console.log('Before', req.url);

  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);
  console.log('After', req.url);
};
