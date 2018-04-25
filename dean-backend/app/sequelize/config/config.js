const path = require('path')

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": path.resolve(__dirname, "../../../../data/course.db"),
    "logging": console.log
  },
  "test": {
    "dialect": "sqlite",
    "storage": path.resolve(__dirname, "../../../../data/course.db"),
    "logging": console.log
  },
  "production": {
    "dialect": "sqlite",
    "storage": path.resolve(__dirname, "../../../../data/course.db"),
    "logging": false
  }
}
