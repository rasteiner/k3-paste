const esbuild = require('esbuild');
const vuePlugin = require('esbuild-vue');

const path = require('path');

const dev = process.argv.includes('dev');

const entryPoints = [
  path.resolve(__dirname, '../src/index.ts'),
];

const outfile = path.resolve(__dirname, '../index.js');

esbuild.build({
  entryPoints,
  outfile,
  bundle: true,
  minify: !dev,
  watch: dev,
  target: 'esnext',
  sourcemap: false,
  plugins: [vuePlugin()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"),
  },
})
