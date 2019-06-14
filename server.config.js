const path = require('path');

module.exports = function (env, argv) {
    return {
        entry: './server/index.tsx',
        target: 'node',
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            filename: 'server.js'
        },
        // devtool: 'cheap-module-eval-source-map',
        resolve: {
            alias: {
                build: path.resolve(__dirname, 'build'),
                dist: path.resolve(__dirname, 'dist')
            },
            extensions: [".ts", ".tsx", ".js", ".json"],
            // modules: ["src", "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ['ts-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                { test: /\.css$/, loader: 'typings-for-css-modules-loader?modules' },
                // { test: /\.scss$/, loader: 'typings-for-css-modules-loader?modules&sass' },
                {
                    test: /\.scss$/,
                    include: path.join(__dirname, 'src/components'),
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                camelcase: true,
                                namedExport: true
                            }
                        },
                        { loader: "sass-loader" }
                    ]
                }
            ]
        }
    };
};