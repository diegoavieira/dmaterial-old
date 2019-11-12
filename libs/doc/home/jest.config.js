module.exports = {
  name: 'doc-home',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/doc/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
