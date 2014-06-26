var expect = require("expect.js");

var core = require('../lib/core.js');

describe('core.FIG_ENV_REGEX', function(){
  var FIG_ENV_REGEX = core.FIG_ENV_REGEX;

  it('should match environment variables with port chunk', function(){
    expect(FIG_ENV_REGEX.test('HTTP_1_PORT_8000_TCP')).to.be(true);
  });

  it('should not match environment variables without port chunk', function () {
    expect(FIG_ENV_REGEX.test('DB_2_PORT')).to.be(false);
  });

  it('should match n-th instance of container', function () {
    expect(FIG_ENV_REGEX.test('HTTP_17_PORT_8000_TCP')).to.be(true);
  });

  it('should match names with underscores', function () {
    expect(FIG_ENV_REGEX.test('SOME_SERVICE_2_PORT_5432_TCP')).to.be(true);
  });

  it('should not match variables that dont look like fig vars', function () {
    expect(FIG_ENV_REGEX.test('SOMETHING_PORT_30')).to.be(false);
  });
});
