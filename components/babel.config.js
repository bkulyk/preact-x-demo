let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
      },
    ],
  ];
}

const defaultAlias = {
  'react': 'preact/compat',
  'react-dom': 'preact/compat',
 };

const productionPlugins = [
  'babel-plugin-transform-react-constant-elements',
  [
    'babel-plugin-transform-react-remove-prop-types',
    {
      mode: 'unsafe-wrap',
    },
  ],
];

module.exports = {
  presets: [
    ...defaultPresets,
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'createElement', pragmaFrag: 'Fragment' }],
    'babel-plugin-optimize-clsx',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-object-assign', // for IE 11 support
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  env: {
    cjs: {
      plugins: productionPlugins,
    },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          { alias: { modules: './modules' } },
        ],
      ],
    },
    esm: {
      plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }],
      [
        'babel-plugin-module-resolver',
        { alias: { modules: './modules' } },
      ]
    ],
    },
    es: {
      plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    production: {
      plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    'production-umd': {
      plugins: [...productionPlugins, ['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    test: {
      sourceMaps: 'both',
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['./'],
            alias: defaultAlias,
          },
        ],
      ],
    },
  },
};