// Method for redirect: Adding HTML meta tag to the head

// 1. Load all the urls from redirects.yml
const YAML = require('yaml');
const fs = require('fs'); // file system 
const path = require('path') // windows -> linux file system

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');
console.log(redirectsFile);

// 2. Generate an html page for each redirect url from template.html