const path = require('path')

module.exports = {
  resolve: {
    alias: {
      _atoms: path.resolve(__dirname, 'src/components/atoms'),
      _molecules: path.resolve(__dirname, 'src/components/molecules'),
      _organisms: path.resolve(__dirname, 'src/components/organisms'),
      _templates: path.resolve(__dirname, 'src/components/templates'),
      _config: path.resolve(__dirname, 'src/config'),
      _hocs: path.resolve(__dirname, 'src/hocs'),
      _images: path.resolve(__dirname, 'src/images'),
      _pages: path.resolve(__dirname, 'src/pages'),
      _styles: path.resolve(__dirname, 'src/styles'),
      _utils: path.resolve(__dirname, 'src/utils'),
      _data: path.resolve(__dirname, 'src/data'),
      _hooks: path.resolve(__dirname, 'src/hooks'),
      _contexts: path.resolve(__dirname, 'src/contexts'),
      _services: path.resolve(__dirname, 'src/services'),
    },
  },
}
