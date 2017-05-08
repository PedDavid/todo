require('./style.scss')

const heading = document.createElement('h1')
const headingText = document.createTextNode('Hello Web Pack World')
heading.appendChild(headingText)
console.log('Hello')
document.getElementById('root').appendChild(heading)
