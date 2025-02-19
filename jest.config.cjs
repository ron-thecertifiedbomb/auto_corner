// jest.config.cjs
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  // Optionally, specify your Babel config if not automatically detected:
  // babelConfig: require('./babel.config.cjs'),
};
