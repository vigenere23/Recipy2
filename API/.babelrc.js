const presets = [
  "@babel/preset-env"
]

const plugins = [
  ["module-resolver", {
    "root": ["."],
    "alias": {
      "@": "./src"
    }
  }]
]

module.exports = { presets, plugins }