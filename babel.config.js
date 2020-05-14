module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@constants': './src/constants',
          '@controllers': './src/controllers',
          '@db': './src/libs/db',
          '@helpers': './src/helpers',
          '@libs': './src/libs',
          '@middleware': './src/middleware',
          '@models': './src/models',
          '@server': './src/server'
        }
      }
    ]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}
