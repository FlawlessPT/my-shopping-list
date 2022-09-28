module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~/assets': './src/assets',
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/navigation': './src/navigation',
          '~/theme': './src/theme',
          '~/translations': './src/translations',
          '~/http': './src/http',
          '~/models': './src/models',
          '~/providers': './src/providers',
          '~/helpers': './src/helpers',
          '~/hooks': './src/hooks',
        },
      },
    ],
  ],
};
