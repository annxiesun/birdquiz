const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: process.env.PORT || 8001
   },



   module: {
       
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env',
               '@babel/react',{
               'plugins': ['@babel/plugin-proposal-class-properties']}]
            }

            
         }, 
         
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }, 

          {
            test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
            use: ['file-loader']
          },
          { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }

      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ],

}

 
