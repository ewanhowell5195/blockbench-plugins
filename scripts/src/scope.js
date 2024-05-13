globalThis.PluginList = {}

function register(id, data) {
  PluginList[id] = data
}

globalThis.Plugin = { register }
globalThis.BBPlugin = { register }

const dummmyClass = class {
  constructor() {
    this.rotation = {}
    this.position = {}
    this.fileName = () => {}
    this.load = async () => {}
    this.menu = {}
    this.label = {
      style: {},
      prepend: () => {}
    }
  }
}
dummmyClass.prototype.menu = {}
dummmyClass.options = {
  components: {}
}

globalThis.localStorage = {
  getItem: () => {},
  setItem: () => {}
}

globalThis.THREE = {
  OrthographicCamera: dummmyClass,
  PlaneBufferGeometry: dummmyClass,
  Vector2: dummmyClass,
  Matrix4: dummmyClass,
  Loader: dummmyClass,
  MeshStandardMaterial: dummmyClass,
  Interpolant: dummmyClass,
  Quaternion: dummmyClass,
  MeshBasicMaterial: dummmyClass,
  Mesh: dummmyClass,
  Object3D: dummmyClass,
  Color: dummmyClass,
  Euler: dummmyClass,
  Vector3: dummmyClass
}

globalThis.app = {
  getPath: () => ""
}

const element = {
  append: () => {},
  setAttribute: () => {},
  addEventListener: () => {},
  getContext: () => {},
  classList: {
    add: () => {}
  },
  style: {},
  setAttributeNS: () => {},
  appendChild: () => {}
}

globalThis.document = {
  createElement: () => element,
  createElementNS: () => element,
  addEventListener: () => {},
  removeEventListener: () => {},
  fonts: [],
  querySelector: () => element
}

document.fonts.add = () => {}

globalThis.Interface = {
  createElement: document.createElement
}

globalThis.Blockbench = {
  addCSS: () => {},
  getIconNode: document.createElement,
  isNewerThan: () => {},
  addMenuEntry: () => {},
  on: () => {},
  Codec: dummmyClass,
  ModelFormat: dummmyClass,
  Animation: dummmyClass
}

globalThis.indexedDB = {
  open: () => {
    const request = {}
    setTimeout(() => {
      request.result = {
        transaction: () => ({
          objectStore: () => ({
            getAll: () => ({})
          })
        })
      }
      request.onsuccess()
    }, 0)
    return request
  }
}

globalThis.Canvas = {
  ground_plane: {},
  outlineMaterial: {
    clone: () => ({})
  }
}

globalThis.Codecs = {
  java_block: {
    on: () => {}
  }
}

globalThis.$ = () => ({
  length: 0,
  text: () => {},
  append: () => {}
})

globalThis.Plugins = ({
  all: []
})

globalThis.Modes = {
  options: {
    edit: {},
    paint: {}
  }
}

globalThis.MenuBar = {
  addAction: () => {}
}

Array.prototype.safePush = Array.prototype.push

const strings = [
  "osfs"
]
strings.forEach(e => globalThis[e] = "")

const objects = [
  "Project",
  "settings",
  "BarItems",
  "Prism"
]
objects.forEach(e => globalThis[e] = new Proxy({}, {
  get: () => ({})
}))

const arrays = [
  "markerColors",
  "recent_projects"
]
arrays.forEach(e => globalThis[e] = [])

const classes = [
  "ModelFormat",
  "Image",
  "Dialog",
  "Codec",
  "Action",
  "BarItem",
  "Property",
  "ModelProject",
  "FontFace",
  "Cube",
  "CubeFace",
  "EffectAnimator",
  "Texture",
  "Group",
  "Locator",
  "OutlinerNode",
  "BoneAnimator",
  "BarMenu",
  "Panel",
  "Toolbar",
  "Menu",
  "Keybind",
  "Vue",
  "PreviewScene",
  "IntersectionObserver"
]
classes.forEach(e => globalThis[e] = dummmyClass)

const functions = [
  "alert",
  "bbuid",
  "JSZip",
  "guid",
  "requestAnimationFrame",
  "isApp",
  "addEventListener",
  "DOMPurify"
]
functions.forEach(e => globalThis[e] = () => {})

DOMPurify.sanitize = () => ""

globalThis.window = globalThis