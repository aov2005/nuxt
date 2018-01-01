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
      ["src/nuxt", "src/nuxt"],
      ["src/nuxt/assets", "src/nuxt/assets"],
      ["src/nuxt/assets/README.md", "src/nuxt/assets/README.md"],
      ["src/nuxt/components", "src/nuxt/components"],
      ["src/nuxt/components/Logo.vue", "src/nuxt/components/Logo.vue"],
      ["src/nuxt/components/README.md", "src/nuxt/components/README.md"],
      ["src/nuxt/layouts", "src/nuxt/layouts"],
      ["src/nuxt/layouts/default.vue", "src/nuxt/layouts/default.vue"],
      ["src/nuxt/layouts/README.md", "src/nuxt/layouts/README.md"],
      ["src/nuxt/middleware", "src/nuxt/middleware"],
      ["src/nuxt/middleware/README.md", "src/nuxt/middleware/README.md"],
      ["src/nuxt/pages", "src/nuxt/pages"],
      ["src/nuxt/pages/index.vue", "src/nuxt/pages/index.vue"],
      ["src/nuxt/pages/README.md", "src/nuxt/pages/README.md"],
      ["src/nuxt/plugins", "src/nuxt/plugins"],
      ["src/nuxt/plugins/README.md", "src/nuxt/plugins/README.md"],
      ["src/nuxt/static", "src/nuxt/static"],
      ["src/nuxt/static/favicon.ico", "src/nuxt/static/favicon.ico"],
      ["src/nuxt/static/README.md", "src/nuxt/static/README.md"],
      ["src/nuxt/store", "src/nuxt/store"],
      ["src/nuxt/store/README.md", "src/nuxt/store/README.md"],
      ["src/nuxt/README.md", "src/nuxt/README.md"],
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
      ["src/nuxt", "src/nuxt"],
      ["src/nuxt/assets", "src/nuxt/assets"],
      ["src/nuxt/assets/README.md", "src/nuxt/assets/README.md"],
      ["src/nuxt/components", "src/nuxt/components"],
      ["src/nuxt/components/Logo.vue", "src/nuxt/components/Logo.vue"],
      ["src/nuxt/components/README.md", "src/nuxt/components/README.md"],
      ["src/nuxt/layouts", "src/nuxt/layouts"],
      ["src/nuxt/layouts/default.vue", "src/nuxt/layouts/default.vue"],
      ["src/nuxt/layouts/README.md", "src/nuxt/layouts/README.md"],
      ["src/nuxt/middleware", "src/nuxt/middleware"],
      ["src/nuxt/middleware/README.md", "src/nuxt/middleware/README.md"],
      ["src/nuxt/pages", "src/nuxt/pages"],
      ["src/nuxt/pages/index.vue", "src/nuxt/pages/index.vue"],
      ["src/nuxt/pages/README.md", "src/nuxt/pages/README.md"],
      ["src/nuxt/plugins", "src/nuxt/plugins"],
      ["src/nuxt/plugins/README.md", "src/nuxt/plugins/README.md"],
      ["src/nuxt/static", "src/nuxt/static"],
      ["src/nuxt/static/favicon.ico", "src/nuxt/static/favicon.ico"],
      ["src/nuxt/static/README.md", "src/nuxt/static/README.md"],
      ["src/nuxt/store", "src/nuxt/store"],
      ["src/nuxt/store/README.md", "src/nuxt/store/README.md"],

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
