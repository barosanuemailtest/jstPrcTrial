module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // collectCoverage: true,
    // collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    verbose: true

}
