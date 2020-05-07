const rimraf = require("rimraf");

rimraf.sync("./public/build/");
rimraf.sync("./public/static/");
rimraf.sync("./public/import.js");