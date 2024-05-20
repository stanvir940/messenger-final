module.exports = {
    preset: 'react-native',
    setupFiles: ['./jestSetup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|react-native)'
    ],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  