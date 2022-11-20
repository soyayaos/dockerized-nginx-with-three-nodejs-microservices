module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "arrow-body-style": "off",
        "camelcase": "off",
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "eol-last": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "indent": "off",
        "max-len": [
            "error",
            {
                "code": 150
            }
        ],
        "no-await-in-loop": "off",
        "no-empty-function": "off",
        "no-param-reassign": "off",
        "no-promise-executor-return": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "padded-blocks": "off",
        "prefer-const": "off",
        "quote-props": "off",
        "quotes": "off",
        "semi": "off"
    }
}