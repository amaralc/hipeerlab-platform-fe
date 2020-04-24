/* --------------------------------- IMPORTS ---------------------------------*/
/**
 * Desconsiderar erro indicado pelo eslint
 */
const { addBabelPlugin, override } = require('customize-cra');

/* --------------------------------- EXPORTS ---------------------------------*/
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
