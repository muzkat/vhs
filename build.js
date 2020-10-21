const sass = require('sass'),
  fs = require('fs')

const path = ['./src/scss/main.scss']

sass.render({ file: path[0], outFile: path[0] }, function (err, result) {
  if (!err) {
    fs.writeFile('./style.css', result.css, function (err) {
      if (!err) {
        //file written on disk
      }
    })
  }
})