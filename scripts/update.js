const { createInterface } = require("readline")
const fs = require("node:fs")
require("./src/scope.js")

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = question => new Promise(fulfill => {
  rl.question(question, fulfill)
})

input("Enter plugin ID to update the metadata of: ").then(id => {
  id = id.trim().toLowerCase().replace(/\s/g, "_")
  if (fs.existsSync(`../plugins/${id}.js`)) require(`../plugins/${id}.js`)
  else if (fs.existsSync(`../plugins/${id}/${id}.js`)) require(`../plugins/${id}/${id}.js`)
  else {
    console.log(`Plugin with ID "${id}" could not be found`)
    process.exit()
  }
  const plugins = JSON.parse(fs.readFileSync("../plugins.json"))
  setTimeout(() => {
    if (!PluginList[id]) {
      console.log(`The plugin "${id}" has no metadata`)
      process.exit()
    }
    plugins[id] ??= {}
    for (const key of Object.keys(plugins[id])) {
      delete plugins[id][key]
    }
    for (const [key, value] of Object.entries(PluginList[id])) {
      if (typeof value !== "function") {
        plugins[id][key] = value
      }
    }
    fs.writeFileSync("../plugins.json", JSON.stringify(plugins, null, 2))
    console.log(`Updated the metadata for the plugin "${id}"`)
    process.exit()
  }, 100)
})