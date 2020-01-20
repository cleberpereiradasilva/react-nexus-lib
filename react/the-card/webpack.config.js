const path = require("path");
const fs = require("fs");

function getDirectories(srcpath) {
  const retorno = {};
  fs.readdirSync(srcpath)
    .filter(function(file) {
      return fs.statSync(path.join(srcpath, file)).isDirectory();
    })
    .map(f => {
      retorno[`${f}`] = `${srcpath}/${f}/${f}.js`;
    });

  return retorno;
}

const entries = getDirectories("./src/components");

console.log(entries);

module.exports = {
  entry: entries,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./[name]/index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};
