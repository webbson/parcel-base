declare var module: any;
import "./scss/main.scss" 

import "./ts/main"

if (module.hot) {
    module.hot.accept()
  }