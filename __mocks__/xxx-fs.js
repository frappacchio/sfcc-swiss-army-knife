const fs = jest.createMockFromModule('xxx-fs');
async function readFile() {
  return Promise.resolve('ciao');
}
fs.readFile = readFile;
module.exports = fs;
