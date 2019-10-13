const {override, fixBabelImports, addLessLoader,disableEsLint} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        // modifyVars: {'@primary-color': '#1DA57A'},
    }),
    disableEsLint()
);