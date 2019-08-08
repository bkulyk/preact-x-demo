import babel from 'rollup-plugin-babel';
// import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';
// import svgr from '@svgr/rollup';
import pkg from './package.json';

const plugins = [
  terser(),
  external(),
  // url(),
  // svgr(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers'],
  }),
  resolve(),
  // commonjs(),
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins,
  },
  // {
  //   input: {
  //     index: 'src/index',
  //     'app-bar': 'src/app-bar',
  //     'base-fonts': 'src/base-fonts',
  //   },
  //   output: {
  //     dir: 'esm',
  //     format: 'esm',
  //   },
  // },
];
