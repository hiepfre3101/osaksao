import pluginVue from "eslint-plugin-vue";
import globals from "globals";

module.exports = {
     ...pluginVue.configs["flat/recommended"],
     rules:{
        'vue/no-multiple-template-root': 'off',
     },
      languageOptions: {
           sourceType: "module",
           globals: {
             ...globals.browser,
           },
         },
}