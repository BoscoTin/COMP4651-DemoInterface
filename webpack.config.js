const path = require('path');

function url_domain(data) {
  var    a      = document.createElement('a');
         a.href = data;
  return a.hostname;
}

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
                  presets: ['@babel/preset-env',
                    '@babel/preset-react',
                    {
                      'plugins': [
                        '@babel/plugin-proposal-class-properties'
                      ]
                    }
                  ]
                }
              }
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
        ]
    },
    //增加一個給devserver的設定
    devServer: {
        //指定開啟port為9000
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        historyApiFallback: true,
        open: true
    }
};
