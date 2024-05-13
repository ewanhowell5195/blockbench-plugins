const fs = require("node:fs")
require("./src/scope.js")

const plugins = JSON.parse(fs.readFileSync("../plugins.json"))
for (const file of fs.readdirSync("../plugins")) {
  if (file.startsWith("_")) continue
  if (file.endsWith(".js")) require(`../plugins/${file}`)
  else require(`../plugins/${file}/${file}.js`)
}

setTimeout(() => {
  const errors = []
  for (const [id, data] of Object.entries(PluginList)) {
    if (!plugins[id]) continue
    const checked = []
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "function") continue
      checked.push(key)
      if (!plugins[id][key]) {
        errors.push(`"${id}" missing "${key}" in "plugins.json"`)
      } else {
        if (typeof value !== typeof plugins[id][key]) {
          errors.push(`"${id}" has mismatching "${key}"`)
        }
        if (typeof value === "object") {
          if (JSON.stringify(value) !== JSON.stringify(plugins[id][key])) {
            errors.push(`"${id}" has mismatching "${key}"`)
          }
        } else if (value !== plugins[id][key]) {
          errors.push(`"${id}" has mismatching "${key}"`)
        }
      }
    }
    for (const key of Object.keys(plugins[id])) {
      if (!checked.includes(key)) {
        errors.push(`"${id}" missing "${key}" in "${id}.js"`)
      }
    }
  }
  if (errors.length) {
    console.log(errors.join("\n"))
  } else {
    console.log("No inconsistencies found in the plugin metadata")
  }
}, 100)