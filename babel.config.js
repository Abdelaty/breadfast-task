var plugins = [
  'react-native-reanimated/plugin',
  '@babel/plugin-transform-flow-strip-types',
  ['@babel/plugin-transform-private-methods', {loose: true}],
];
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: plugins,
};
