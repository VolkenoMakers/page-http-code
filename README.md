# page-http-code

> Volkeno Page HTTP CODE gives you the possibility to integrate the error pages following the error code in a few clicks, while facilitating the modification of the error message as well as the image with the structure, in your React JS projects

[![NPM](https://img.shields.io/npm/v/page-http-code.svg)](https://www.npmjs.com/package/page-http-code) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save page-http-code
```
You will find below the documentation to manipulate the pages in order to modify the style, the text as well as the image.

The thing to remember is that everything is easily customizable in this library. You will find all the necessary accessories to adapt these pages to your design.


## Usage

First step: import the component with the css file:
```tsx
import React, { Component } from 'react'

import { HttpCodePage } from 'page-http-code'
import 'page-http-code/dist/index.css'

```


Second step: Use the component to get the error page
```tsx

class Example extends Component {
  render() {
    return <HttpCodePage
              text="The requested URL was not found on this server."
              image="My_Image_Path or My_Image_URL"
              typePage={404}
              redirectLink="/accueil"
            />
  }
}
```

## Configuration - Props

| Property                 |   Type   | Require  |  Default | Description                                                                              |
| ------------------------ | :------: | :-----:  | :-------:| :------------------------------------------------------------------------------ |
| typePage               | number   |  true    | 404   | Page code error (404, 401, 403, 500)                                       |
| image                    | string   |  true    | ...      |  Code error picture                                                                        |
| text                     | string   |  true    | ...      |   Erreur textual message                                                              |
| redirectLink                 | string  |  false   | ...     |   Link to return to home page                                                                |

## Default Pages Screenchot
### Page 404 screenshot
![Page 404 screenshot](https://nsm09.casimages.com/img/2022/07/05//22070505511625804917943706.png)

### Page 401 screenshot
![Page 401 screenshot](https://nsm09.casimages.com/img/2022/07/05//22070505543125804917943710.png)

### Page 403 screenshot
![Page 403 screenshot](https://nsm09.casimages.com/img/2022/07/05//22070505573525804917943712.png)

### Page 500 screenshot
![Page 500 screenshot](https://nsm09.casimages.com/img/2022/07/05//22070505560925804917943711.png)


## License

MIT ?? [adama199](https://github.com/adama199)
