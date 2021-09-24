const path = require('path');
module.exports = {
  entry: ['babel-polyfill' , './src/js/main.js'],
  output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'js/bundle.js',
    },
    //output ile oluşacak olan bundle dosyasının nerede
    //oluşacağını belirttik.
    devServer:{
        static:{
            directory:path.join(__dirname,'dist'),
        },
        compress:true,
        port:9000
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
          }
        ]
      }
}