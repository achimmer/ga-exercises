describe('App', function() {
  describe('#getGreeting', function(){
    it('returns the greeting for morning', function(){
      var now = new Date();
      now.setHours(5);
      sinon.useFakeTimers(now);
      expect(App.getGreeting()).to.equal('good morning');
    });
  });
  describe('#getGreeting', function(){
    it('returns the greeting for afternoon', function(){
      var now = new Date();
      now.setHours(13);
      sinon.useFakeTimers(now);
      expect(App.getGreeting()).to.equal('good afternoon');
    });
  });
  describe('getGithubUserInfo()', function() {
    it('calls the github API', function() {
      var jqueryGet = sinon.stub($, 'get');
      App.getGithubUserInfo();
      expect(jqueryGet.calledOnce).to.be.true
    });
  });
});
