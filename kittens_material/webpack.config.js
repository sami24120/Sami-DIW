// Importa los módulos necesarios
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //archivo de entrada de mi aplicación
  entry: './src/js/application.js',
  
  //dónde se colocarán los archivos de salida
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  // Define las reglas para diferentes tipos de archivos
  module: {
    rules: [
      {
        // Busca archivos que terminen en .scss
        test: /\.s[ac]ss$/i,
        
        //para procesar los archivos .scss
        use: [
          'style-loader', // Inyecta CSS en el DOM
          'css-loader', // Traduce CSS en CommonJS
          'sass-loader', // Compila Sass a CSS
        ],
      },
      {
        // Busca archivos que terminen en .css
        test: /\.css$/i,
        
        //para procesar los archivos .css
        use: ['style-loader', 'css-loader',],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};