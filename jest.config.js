module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/packages/**/*.(spec|test).(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/*/src/**.(ts|tsx)', '!**/node_modules/**'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'coverage',
};
