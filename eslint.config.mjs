import globals from "globals";
import pluginJs from "@eslint/js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const userscripts = require('eslint-plugin-userscripts');

export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files: ['*.user.js'],
    plugins: {
      userscripts: {
        rules: userscripts.rules
      }
    },
    rules: {
      ...userscripts.configs.recommended.rules
    },
    settings: {
      userscriptVersions: {
        tampermonkey: '*'
      }
    }
  }
];
