import fs from 'fs-extra';
import { DWInstance, dwinstance } from '../src/dw';
jest.mock('fs-extra');
describe(`'dw.json' instance`, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('dw.json setup', async () => {
    /* const instance: DWInstance = new DWInstance();
    await instance.load();
    const valid = await instance.validate(); */
    const stat = fs.statSync('./appunti.txt');
    expect(true).toBe(true);
  });
});
