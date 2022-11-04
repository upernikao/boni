const path = require("path")

module.exports = {
    entry: {
        "websites/application":  "Boni/vue3/websites/app.js"
    },
    output: {
        path: path.resolve("app", "assets", "javascripts"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",

            Boni: path.resolve("app")
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}