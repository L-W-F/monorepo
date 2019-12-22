module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'root-import',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
