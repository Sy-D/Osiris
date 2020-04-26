import "reflect-metadata";
import 'mocha';

describe('Exit', () => {
  after('Exit mocha gracefully after finishing all tests execution',  () => {
    // Exit node process
    process.exit();
  });
}
