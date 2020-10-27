declare var module: any;

// main entry file for sass
import "./sass/main.scss"

// main entry file for typescript
import "./scripts/main"

if (module.hot) {
  module.hot.accept()
}