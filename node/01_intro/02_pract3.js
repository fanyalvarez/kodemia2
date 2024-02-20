const fs = require('fs');

const type = process.argv[2];
const name = process.argv[3];

const createDirectoty = (name) => {
    fs.mkdir(`./${name}`, (err) => {
        if (err) throw err;
    });
}

const createDirectoryInit = (name) => {
    fs.mkdir(`./${name}`, (err) => {
        if (err) throw err;
        console.log('Directory created');
        fs.writeFile(`./${name}/index.html`, '', (err) => {
            if (err) throw err;
            console.log('file created');
        });
    });
}

const createHtml = () => {
    fs.writeFile(`./${name}.html`, '', (err) => {
        if (err) throw err;
        console.log('file created');
    });
}

const createJs = () => {
    createDirectoty('js')
    fs.writeFile(`./js/${name}.js`, '', (err) => {
        if (err) throw err;
        console.log('file created');
    });

}

const createCss = () => {
    createDirectoty('css')
    fs.writeFile(`./css/${name}.css`, '', (err) => {
        if (err) throw err;
        console.log('file created');
    });

}


switch (type) {
    case 'init':
        createDirectoryInit(name)
        break;
    case 'html':
        createHtml(name)
        break;
    case 'js':
        createJs(name)
        break;
    case 'css':
        createCss(name)
}

//  node example.js css index.html



