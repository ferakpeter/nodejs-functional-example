var naming = require("../original");
var expect = require("chai").expect;

// description and tests for the CreateApplicationName function

var project = { namespace: 'foo1', repository: 'bar', branch: 'trunk/test', subfolder: undefined };

describe('Given the string elements of a repository URL in SVN or GIT', function() {
  describe('passed to the function CreateApplicationName()', function () {

    var jobname = naming.CreateApplicationName(project, 'foobar');

    it('when the field is empty then dont display it', function () {
        expect(jobname.split(".").length).to.equal(4);
    });

    it('when the field contains a slash, replace it with an underscore', function () {
        String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
        expect(jobname.contains("/")).to.equal(false);
        expect(jobname.contains("_")).to.equal(true);
    });

    it('otherwise join all fields into one string using the "." character between each string', function () {
        expect(jobname).to.equal('foo1.bar.trunk_test.foobar');
    });
  });
});