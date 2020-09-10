declare var module: any;

// main entry file for sass
import "./scss/main.scss" 

// main entry file for typescript
import "./ts/main"

if (module.hot) {
    module.hot.accept()
  }