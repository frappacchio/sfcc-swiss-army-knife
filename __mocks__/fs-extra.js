const fs = jest.createMockFromModule('fs-extra');
// const fsextra = require('fs-extra');
async function readJson() {
  return Promise.resolve({
    hostname: 'sandbox-instance.demandware.net',
    username: 'user@email.com',
    password: '!3urTpz9$1MX',
    'code-version': 'pippo',
    'client-id': 'd5d89dX15-73f4-46rd-a9f0-fak3c0de',
    'client-secret': 'v7%j2OJkYxji'
  });
}
async function pathExists() {
  return Promise.resolve(true);
}
fs.copy = async () => {
  return Promise.resolve(true);
};
fs.lstat = async () => {
  return Promise.resolve({
    isFile: () => true
  });
};
fs.readdirSync = () => ['folder', 'file.txt'];
fs.pathExists = pathExists;
fs.statSync = () => {
  isFile: () => true;
};
fs.readJson = readJson;
fs.pathExists = pathExists;
fs.readFile = async () => {
  return Promise.resolve('content=true');
};
module.exports = fs;
