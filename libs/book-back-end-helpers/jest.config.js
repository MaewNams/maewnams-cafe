module.exports = {
  name: 'book-back-end-helpers',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/book-back-end-helpers',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
