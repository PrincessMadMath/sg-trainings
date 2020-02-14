module.exports = {
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-lodash",
        "@sharegate/eslint-config-react",
        "@sharegate/eslint-config-strict"
    ],
    plugins: ["@sharegate/apricot", "@sharegate/rules"],
    parser: "babel-eslint",
    globals: {
        CONFIG: true,
        process: true,
        require: true
    },
    env: {
        browser: true,
        es6: true
    },
    rules: {
        "no-debugger": "warn",
        "no-console": "off",

        "react/jsx-no-undef": ["warn", { allowGlobals: true }],
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx", ".ts", ".tsx"] }
        ],

        "comma-spacing": ["warn", { before: false, after: true }],

        "@sharegate/rules/semantic-ui-button-has-type": "warn",
        "@sharegate/rules/strict-css-modules-names": "warn",
        "@sharegate/rules/prefer-orbit-ui-components": "warn",

        "@sharegate/apricot/no-telemetry-in-components": "warn",
        "@sharegate/apricot/no-reaching-in-features": "warn",
        "@sharegate/apricot/strict-component-boundaries-in-features": "warn",
        "@sharegate/apricot/no-class-components": "warn",
        "@sharegate/apricot/require-register-function-in-handlers": "warn",
        "@sharegate/apricot/require-register-function-in-reducers": "warn",
        "@sharegate/apricot/require-register-function-in-registration": "warn",
        "@sharegate/apricot/no-relative-path-to-parent-directory": "warn",
        "@sharegate/apricot/strict-assets-location": "warn",
        "@sharegate/apricot/strict-assets-name": "warn",
        "@sharegate/apricot/strict-file-names": [
            "warn",
            {
                warnings: [
                    ["handler.js", "handlers.js"],
                    ["reducer.js", "reducers.js"],
                    ["registrations.js", "registration.js"],
                    ["action.js", "actions.js"]
                ]
            }
        ]
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],

            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            parser: "@typescript-eslint/parser",

            globals: {
                CONFIG: true,
                process: true,
                require: true
            },

            plugins: ["@typescript-eslint"],
            rules: {
                "no-console": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-use-before-define": [
                    "error",
                    { functions: false, classes: true, variables: false }
                ]
            }
        }
    ]
};
