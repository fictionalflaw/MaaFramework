declare global {
    var MaaAPI: any
}

globalThis.MaaAPI = require('../../install/bin/MaaNode.node')
