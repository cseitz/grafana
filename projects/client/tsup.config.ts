// @ts-nocheck
import { defineConfig } from 'tsup';
import url from "url";
import fs from 'fs';


const entryPoints = {
    '.': 'src/index.ts',
    'woah/test': 'src/woah/test.ts',
}

export default defineConfig({
    entry: Object.values(entryPoints),
    format: ['esm', 'cjs'],
    splitting: false,
    sourcemap: 'inline',
    clean: true,
    dts: true,
})




const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

const packageExports = Object.fromEntries(Object.entries(entryPoints)
    .map(([name, entry]) => {
        const path = entry.slice('src/'.length).slice(0, -'.ts'.length);
        return [name === '.' ? name : ('./' + name), {
            types: `./dist/${path}.d.ts`,
            import: `./dist/${path}.js`,
            require: `./dist/${path}.cjs`,
        }]
    }))

// console.log(packageExports, fs.readfileSync, __dirname);

const pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'));
pkg.exports = packageExports;
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, '  '));


// https://dev.to/chinhh/server-monitoring-with-prometheus-and-grafana-266o
