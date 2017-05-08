require('./style.css')

//setInterval(_ => {
  const heading = document.createElement('h1')
  const headingText = document.createTextNode('Hello Web Pack World 1')
  heading.appendChild(headingText)
  console.log('Hello')
  document.getElementById('root').appendChild(heading)
//}, 1000)
