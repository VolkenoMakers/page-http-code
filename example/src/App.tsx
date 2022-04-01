import React from 'react'

import { HttpCodePage } from 'page-http-code'
import 'page-http-code/dist/index.css'



const App = () => {
    var text = ''
    var typePage = 404
    var img = ''
    var redirectLink = 'https://volkeno.sn'
  return <HttpCodePage text={text} image={img} typePage={typePage} redirectLink={redirectLink} />
}

export default App
