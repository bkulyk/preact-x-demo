module.exports = {
  testRegex: [
    '(/__tests__/.*|(\\.|/)(test|spec))\\.spec\\.js$'
  ],
  moduleNameMapper: {
    "@bitchin/(.*)$": `${__dirname}/cjs/$1`,
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
