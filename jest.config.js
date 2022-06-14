module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist', 'cypress'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'src/utils/**/*',
    '!**/node_modules/**',
    '!src/components/GitLink/**/*',
    '!src/**/index.js',
  ],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/internals/mocks/FileTransformer.js',
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/internals/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/src/internals/mocks/styleMock.js',
  },
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -12,
    },
  },
};
