let path = require('path')

module.exports = {
    context: path.resolve(__dirname, "app"), // 모듈 파일 폴더
    entry: { // 엔트리 파일 목록
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 번들 파일 폴더
        filename: '[name].bundle.js' // 번들 파일 이름 규칙
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query: {
            presets: ['node6']
          }
        }
      ]
    }
}
