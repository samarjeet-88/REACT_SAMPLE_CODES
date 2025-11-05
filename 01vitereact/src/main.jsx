import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";

function MyApp(){
    return(
        <div>
            <h3>Custom app hhh</h3>
        </div>
    )
}

const anotherUser="another samarjeet"

const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'Click me to visite google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp()
    ReactElement
    // <App/>
)
