// Method for redirect: Adding HTML meta tag to the head

// 1. Load all the urls from redirects.yml
const YAML = require('yaml');
const fs = require('fs'); // file system 
const path = require('path') // windows -> linux file system

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8');
const redirects = YAML.parse(redirectsFile);

console.log(redirects);

// 2. Generate an html page for each redirect url from template.html

// load html template
const tempalteHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');

// loop through all url redirects, and generate an html page
for (let [slug, url] of Object.entries(redirects)) {
  console.log('Generating HTML Page for ', slug);

  const html = tempalteHTML.replaceAll('https://example.com', url);

  // Create folder for each slug
  const folderPath = path.join(__dirname, 'dist', slug);
  fs.mkdirSync(folderPath, { recursive: true });

  // Create an index.html in each slug directory (entry point)
  fs.writeFileSync(path.join(folderPath, 'index.html'), html);

}
