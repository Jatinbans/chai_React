import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

// eda syntax shi nhi ga ta nhi chl reha eh kyoki ehnu apa customised bnaya
/*
const ReactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}
*/

const anotherElement = (
  <a href="https://google.com" target='_google'>Visit google</a>
)

const anotherUser = "chai aur react"

//tagname,props,childrentext
const ReactElement = React.createElement(
  'a',
  {href:'https:google.com',targte:'_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    ReactElement

 
)
