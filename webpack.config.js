const path = require('path');
module.exports = {
    //如果有一個以上的檔案需要打包，可以傳陣列給entry
    entry: ['./src/index.jsx'],
    output: {
        filename: 'bundle/bundle.js',
        path: path.join(__dirname, "./public"),
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            {
              test: /.jsx$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                 options: {
                   presets: ['@babel/preset-react']
                 }
              }
            }
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為9000
        contentBase: path.join(__dirname, 'public'),
        port: 9000
    }
};
