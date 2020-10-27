import cssVars from 'css-vars-ponyfill';
// lazysizes for lazy loading images etc https://github.com/aFarkas/lazysizes
import 'lazysizes';
// lazysizes unveilhooks plugin for backgrounds etc. https://github.com/aFarkas/lazysizes/tree/master/plugins/unveilhooks
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';


// Import other typescript files here.
import "./components/navigation.ts";

// ponyfill for css var usage.
cssVars({});