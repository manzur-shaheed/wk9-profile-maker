// prompt user (ask questions)
const open = require('open');
const inquirer = require('inquirer');
const fs = require('fs');

const toHtmlStr = data => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${data.name}</h1>
    <p class="lead">I am from ${data.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${data.lnkdUrl}</li>
      <li class="list-group-item">LinkedIn: ${data.gitUrl}</li>
      <li class="list-group-item">Languages: ${data.lang}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? ',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where do you live? ',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'One line Bio: ',
    },
    {
        type: 'rawlist',
        name: 'lang',
        choices: ['HTML', 'JavaScript', 'Node', 'Python'],
    },
    {
        type: 'input',
        name: 'lnkdUrl',
        message: 'LinkedIn URL? ',
    },
    {
        type: 'input',
        name: 'gitUrl',
        message: 'github URL? ',
    },
  ])
  .then((data) => {
    const filename = "index.html";

    const htmlStr = toHtmlStr(data);
    fs.writeFile(filename, htmlStr, (err) =>
      err ? console.log(err) : open('index.html')
    );
  });
// inquirer.prompt([{}, {}])
    // .then(answers => {
        // do stuff with answers
    // })

// create HTML based on answers

// save string as HTML file (index.html)

//  open the index.html
