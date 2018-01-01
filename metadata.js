module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "application created by thinkjs"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "babel": {
      "type": "confirm",
      "message": "Do you want to turn on babel?"
    }
  },
  "new": {
    "default": [
      ["nuxt", "nuxt"],
      ["nuxt/assets", "nuxt/assets"],
      ["nuxt/assets/README.md", "nuxt/assets/README.md"],
      ["nuxt/components", "nuxt/components"],
      ["nuxt/components/Logo.vue", "nuxt/components/Logo.vue"],
      ["nuxt/components/README.md", "nuxt/components/README.md"],
      ["nuxt/layouts", "nuxt/layouts"],
      ["nuxt/layouts/default.vue", "nuxt/layouts/default.vue"],
      ["nuxt/layouts/README.md", "nuxt/layouts/README.md"],
      ["nuxt/middleware", "nuxt/middleware"],
      ["nuxt/middleware/README.md", "nuxt/middleware/README.md"],
      ["nuxt/pages", "nuxt/pages"],
      ["nuxt/pages/index.vue", "nuxt/pages/index.vue"],
      ["nuxt/pages/README.md", "nuxt/pages/README.md"],
      ["nuxt/plugins", "nuxt/plugins"],
      ["nuxt/plugins/README.md", "nuxt/plugins/README.md"],
      ["nuxt/static", "nuxt/static"],
      ["nuxt/static/favicon.ico", "nuxt/static/favicon.ico"],
      ["nuxt/static/README.md", "nuxt/static/README.md"],
      ["nuxt/store", "nuxt/store"],
      ["nuxt/store/README.md", "nuxt/store/README.md"],
      ["src/extend", "src/extend"],
      ["src/extend/nuxt.js", "src/extend/nuxt.js"],

      ["src/bootstrap", "src/bootstrap"],
      ["src/config", "src/config"],
      ["src/controller/base.js", "src/controller/base.js"],
      ["src/controller/index.js", "src/controller/index.js"],
      ["src/logic", "src/logic"],
      ["src/model", "src/model"],
      ["test/index.js", "test/index.js"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"]
    ],
    "multiModule": [
      ["nuxt", "nuxt"],
      ["nuxt/assets", "nuxt/assets"],
      ["nuxt/assets/README.md", "nuxt/assets/README.md"],
      ["nuxt/components", "nuxt/components"],
      ["nuxt/components/Logo.vue", "nuxt/components/Logo.vue"],
      ["nuxt/components/README.md", "nuxt/components/README.md"],
      ["nuxt/layouts", "nuxt/layouts"],
      ["nuxt/layouts/default.vue", "nuxt/layouts/default.vue"],
      ["nuxt/layouts/README.md", "nuxt/layouts/README.md"],
      ["nuxt/middleware", "nuxt/middleware"],
      ["nuxt/middleware/README.md", "nuxt/middleware/README.md"],
      ["nuxt/pages", "nuxt/pages"],
      ["nuxt/pages/index.vue", "nuxt/pages/index.vue"],
      ["nuxt/pages/README.md", "nuxt/pages/README.md"],
      ["nuxt/plugins", "nuxt/plugins"],
      ["nuxt/plugins/README.md", "nuxt/plugins/README.md"],
      ["nuxt/static", "nuxt/static"],
      ["nuxt/static/favicon.ico", "nuxt/static/favicon.ico"],
      ["nuxt/static/README.md", "nuxt/static/README.md"],
      ["nuxt/store", "nuxt/store"],
      ["nuxt/store/README.md", "nuxt/store/README.md"],
      ["src/extend", "src/extend"],
      ["src/extend/nuxt.js", "src/extend/nuxt.js"],

      ["src/bootstrap", "src/common/bootstrap"],
      ["src/config", "src/common/config"],
      ["src/config/config.js", "src/[moduleName]/config/config.js"],
      ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
      ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
      ["src/logic", "src/[moduleName]/logic"],
      ["src/model", "src/[moduleName]/model"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"]
    ]
  },
  "controller": {
    "default": [
      ["src/controller/index.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ],
    "rest": [
      ["src/controller/rest.js", "src/[moduleName]/controller/rest.js"],
      ["src/controller/restIndex.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ],
    "ssr": [
      ["src/controller/index.js", "src/[moduleName]/controller/[action].js"],
      ["src/pages/template.vue", "src/[moduleName]/nuxt/pages/[action].js"]
    ]
  },
  "model": [
    ["src/model/index.js", "src/[moduleName]/model/[action].js"]
  ],
  "service": [
    ["src/service/index.js", "src/[moduleName]/service/[action].js"]
  ],
  "middleware": [
    ["src/middleware/base.js", "src/[moduleName]/middleware/[action].js"]
  ],
  "adapter": [
    ["src/adapter/base.js", "src/[moduleName]/adapter/[type]/[action].js"]
  ],
  "module": [
    ["src/config/config.js", "src/[moduleName]/config/config.js"],
    ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
    ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
    ["src/logic/index.js", "src/[moduleName]/logic/index.js"],
    ["src/model/index.js", "src/[moduleName]/model/index.js"]
  ],
  "completeMessage": "To get started:\n\n<% if (!inPlace) { %># enter path\n$ cd <%= destDirName %>\n\n<% } %># install dependencies:\n$ npm install\n\n# run the app\n$ npm start"
}
