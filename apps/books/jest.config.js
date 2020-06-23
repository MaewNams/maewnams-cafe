module.exports = {
  name: 'books',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/books',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
