import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import glob from 'glob';
import R from 'rambda';
import { basename } from 'path';

const chunks = R.fromPairs(R.map(
  path => [R.head(R.split('.', basename(path))), path],
  glob.sync('src/*.js'),
));

const plugins = [
  resolve(),
  commonjs({ include: 'node_modules/**' }),
  external(),
  babel({
    runtimeHelpers: true,
  }),
  terser(),
];

export default [
  {
    // esm modules for a la carte imports for host apps will
    // help keep bundle sizes to a minimum in host apps.
    external: [
      'react',
      'react-dom',
    ],
    input: chunks,
    output: [
      {
        dir: 'esm',
        format: 'esm',
      },
    ],
    plugins: [
      del({ targets: 'esm' }),
      ...plugins,
    ],
  },
  {
    // the cjs chunks will be used in tests for host apps as jest
    input: chunks,
    output: {
      dir: 'cjs',
      format: 'cjs',
    },
    plugins: [
      del({ targets: 'cjs' }),
      ...plugins,
    ],
  },
];
