const fs = require('fs');
const fse = require('fs-extra');
const jsLinks = [];
const cssLinks = [];


async function copyStaticFilesToPublic() {
  fse.copySync('./build/static/', './public/static/');
}

async function createJsLinks() {
 const files = fs.readdirSync('./public/static/js/');
    files.forEach(file => {
      if (file.indexOf('.txt') === -1 && file.indexOf('map') === -1) {
        let  link = "link=document.createElement('script');link.src = '/static/js/" + file + "';link.type='text/javascript';link.rel = 'prefetch';link.as='script';document.getElementsByTagName('head')[0].appendChild(link);";
        jsLinks.push(link)
      }
    });
  

}

async function createCssLinks() {
   const  files = fs.readdirSync('./public/static/css/');
    files.forEach(file=> {
      if (file.indexOf('.txt') === -1 && file.indexOf('map') === -1) {
        let link = "link = document.createElement('link');link.href = '/static/css/" + file + "';link.type = 'text/css';link.rel = 'stylesheet';document.getElementsByTagName('head')[0].appendChild(link);";
        cssLinks.push(link)
      }
    });
}

async function generate() {
  

  await copyStaticFilesToPublic()
  await createJsLinks()
  await createCssLinks()

  let jsString = 'function getImports(){';
  let cssString = '';

  jsLinks.forEach(link => {
    jsString += link;
  });

  cssLinks.forEach(link => {
    cssString += link;
  });


  fs.writeFileSync('./public/import.js', jsString);
  fs.appendFileSync('./public/import.js', cssString);
  fs.appendFileSync('./public/import.js', '};');

}



generate()