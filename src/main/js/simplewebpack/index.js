require('./style.scss')

const heading = document.createElement('h1')
<<<<<<< Updated upstream:src/main/js/simplewebpack/index.js
const headingText = document.createTextNode('Hello Web Pack World')
=======
const headingText = document.createTextNode('Hello webpack World')
>>>>>>> Stashed changes:src/main/js/simplewebpack/index.js
heading.appendChild(headingText)
console.log('Hello')
document.getElementById('root').appendChild(heading)
