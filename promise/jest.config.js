// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFiles: ["./jest.setup.js"], // If you have a setup file
};
