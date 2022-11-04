const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = env => {

    env.mode = env.mode ? env.mode : "development"
    env.watch = env.watch ? env.watch : false

    const production = env.mode == "production" ? true : false

    return {
        watch: env.watch == "true",
        mode: production ? "production" : "development",

        entry: {
            "websites/application":  "Boni/vue3/websites/app.js",
            "dashboards/application":  "Boni/vue3/dashboards/app.js",
            "users/application":  "Boni/vue3/users/app.js",
            "tours/application":  "Boni/vue3/tours/app.js",
        },
        output: {
            path: path.resolve("app", "assets", "javascripts"),
            filename: "[name].js"
        },
        resolve: {
            extensions: [".js"],
            alias: {
                vue: "vue/dist/vue.esm-bundler.js",
    
                Boni: path.resolve("app"),
                BoniVue: path.resolve("lib/vue3")
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
                }, 
                {
                    test: /\.vue$/,
                    loader: "vue-loader"    
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin()
        ]
    }
}