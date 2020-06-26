module.exports = {
  name: 'registration-model',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/registration-model',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
