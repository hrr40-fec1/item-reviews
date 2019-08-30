// babel.config.js
module.exports = (api) => {
  const isTest = api.env('test');
  console.log('is test?', isTest);

  const presets = [
    ['@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ['@babel/preset-react'],
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
