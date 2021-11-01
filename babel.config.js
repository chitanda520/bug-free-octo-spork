module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [//vant配制
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
