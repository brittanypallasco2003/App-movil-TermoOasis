module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          ["react-native-paper/babel"],
          [
            "expo-font",
            {
              fonts: [
                "node_modules/@expo-google-fonts/inter/Quicksand_400Regular.ttf",
                "node_modules/@expo-google-fonts/inter/Quicksand_600SemiBold.ttf",
                "node_modules/@expo-google-fonts/inter/Quicksand_700Bold.ttf",
                "node_modules/@expo-google-fonts/lexend-exa/LexendExa_700Bold.ttf",
                "node_modules/@expo-google-fonts/lexend-exa/LexendExa_600SemiBold.ttf"
              ],
            },
          ],
        ],
      },
    },
  };
};
