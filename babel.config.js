module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          ["react-native-paper/babel"],
          [
            "module:react-native-dotenv",
            {
              moduleName: "@env",
              path: ".env",
            },
          ],
          [
            "expo-font",
            {
              fonts: [
                "node_modules/@expo-google-fonts/inter/Quicksand_600SemiBold.ttf",
                "node_modules/@expo-google-fonts/inter/Quicksand_700Bold.ttf",
                "node_modules/@expo-google-fonts/quicksand/Quicksand_500Medium.ttf",
                "node_modules/@expo-google-fonts/lexend-exa/LexendExa_700Bold.ttf",
                "node_modules/@expo-google-fonts/lexend-exa/LexendExa_600SemiBold.ttf",
                "@expo-google-fonts/lexend-exa/LexendExa_500Medium.ttf"
              ],
            },
          ],
        ],
      },
    },
  };
};
