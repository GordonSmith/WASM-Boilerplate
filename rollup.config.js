import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from "rollup-plugin-postcss";

const pkg = require("./package.json");

const node_libs = ["child_process", "fs", "node-fetch", "os", "path", "semver", "safe-buffer", "tmp", "xmldom"];

function external(id) {
    return node_libs.indexOf(id) >= 0;
}

function globals(id) {
    return undefined;
}

export default {
    input: "lib-es6/MyApp",
    external: external,
    output: [{
        file: pkg.main,
        format: "umd",
        sourcemap: true,
        globals: globals,
        name: pkg.name
    }, {
        file: pkg.module + ".js",
        format: "es",
        sourcemap: true,
        globals: globals,
        name: pkg.name
    }],
    plugins: [
        alias({
        }),
        nodeResolve({
            preferBuiltins: true
        }),
        commonjs({
        }),
        postcss({
            extensions: [".css"],
            minimize: true
        })
    ]
};
