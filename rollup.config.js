import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import glob from 'glob';
import R from 'rambda';
import { basename } from 'path';

const esmChunks = R.fromPairs(R.map(
  path => [R.head(R.split('.', basename(path))), path],
  glob.sync('src/*'),
));

// the structure needs to be a little flatter than with the
// esm imports because it doesn't seem to follow the index
// files
const cjsChunks = R.fromPairs(R.map(
  path => [R.head(R.split('.', basename(path))), path],
  glob.sync('src/**/*.js'),
));
cjsChunks.index = 'src/index';

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
    // esm modules for a la carte imports for host apps will
    // help keep bundle sizes to a minimum in host apps.
    external: [
      'react',
      'react-dom',
    ],
    input: esmChunks,
    output: [
      {
        dir: 'esm',
        format: 'esm',
      },
    ],
    plugins,
  },
  {
    // the cjs chunks will be used in tests for host apps as jest
    // seems to have issues when node_modules use es6 imports.
    input: cjsChunks,
    output: {
      dir: 'cjs',
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
  },
];
