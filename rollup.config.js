import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import glob from 'glob';
import R from 'rambda';
import { basename } from 'path';
import pkg from './package.json';

const chunks = R.fromPairs(R.map(
  path => [R.head(R.split('.', basename(path))), path],
  glob.sync('src/*'),
));

const plugins = [
  resolve(),
  commonjs({ include: 'node_modules/**' }),
  external(),
  babel({
    runtimeHelpers: true,
  }),
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
  {
    external: [
      'react',
      'react-dom',
    ],
    input: chunks,
    output: {
      dir: 'esm',
      format: 'esm',
    },
    plugins,
  },
];
