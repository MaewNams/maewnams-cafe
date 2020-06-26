module.exports = {
  name: 'author-model',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/author-model',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
