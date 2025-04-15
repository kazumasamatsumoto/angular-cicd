module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.spec.json',
    }]
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.test.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/environments/**/*.ts'
  ],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};
