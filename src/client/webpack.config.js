
var path = require('path');

module.exports = {
    entry: './src/client/js/index.jsx',
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/, //tell webpack to use jsx-loader for all *.jsx files
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [ 'node_modules' ]
    },
    externals: {
        //don't bundle the 'react' npm package with our index.js
        //but get it from a global 'React' variable
        'react': 'React'
    }
};
