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
                }
            ]
        }
    };
};