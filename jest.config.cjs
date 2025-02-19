module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };
  