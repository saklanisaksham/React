import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherElement = (
  <a href="https//:www.google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'Click mme to visit google'
)
createRoot(document.getElementById('root')).render(

  <App /> 

)
