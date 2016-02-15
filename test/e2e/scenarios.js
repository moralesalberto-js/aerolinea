'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('the app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should redirect to /home', function() {
    browser.getLocationAbsUrl().then(function(url){
      expect(url).toEqual('/home')
    });
  });

});
