module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/?(*.)+(test).[tj]s'],
  setupFiles: ['./jest.setup.js'],
};
