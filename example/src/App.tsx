import React from 'react'

import { HttpCodePage } from 'page-http-code'
import 'page-http-code/dist/index.css'



const App = () => {
    var text = ''
    var typePage = 403
    var img = ''
  return <HttpCodePage text={text} image={img} typePage={typePage} />
}

export default App
