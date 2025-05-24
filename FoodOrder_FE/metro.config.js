const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-sass-transformer"),
    },
    resolver: {
      sourceExts: [...sourceExts, "scss", "sass"],
    },
  };
})();

//  const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

//  const defaultConfig = getDefaultConfig(__dirname);
 
//  const {
//    resolver: { sourceExts, assetExts },
//  } = getDefaultConfig(__dirname);
 
//  const config = {
//    transformer: {
//      getTransformOptions: async () => ({
//        transform: {
//          experimentalImportSupport: false,
//          inlineRequires: true,
//        },
//      }),
//      babelTransformerPath: require.resolve('react-native-svg-transformer'),
//    },
//    resolver: {
//      assetExts: assetExts.filter(ext => ext !== 'svg'),
//      sourceExts: [...sourceExts, 'svg'],
//    },
//  };
 
//  module.exports = mergeConfig(defaultConfig, config);