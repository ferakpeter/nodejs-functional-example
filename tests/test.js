var index = require("../index");
var expect = require("chai").expect;

describe('index', function() {
  describe('#parse()', function () {
    // [project.namespace, project.repository, project.subfolder, project.branch.replace(/\//g, '_'), pipelineName];

    it('should extract the name according to scheme namespace.repository.branch.jobname', function () {
        var project = { namespace: 'foo1', repository: 'bar', branch: 'trunk', subfolder: undefined };
        var jobname = index.Parse(project, 'foobar');

        expect(jobname).to.equal('foo1.bar.trunk.foobar');
    });

    it('should extract the subfolder', function () {
        var project = { namespace: 'foo', repository: 'bar', branch: 'trunk', subfolder: 'test' };
        var jobname = index.Parse(project, 'foobar');

        expect(jobname).to.equal('foo.bar.test.trunk.foobar');
    });

    it('should swallow empty values', function () {
        var project = { namespace: '', repository: 'bar', branch: 'trunk', subfolder: '' };
        var jobname = index.Parse(project, 'foobar');

        expect(jobname).to.equal('bar.trunk.foobar');
    });
  });
});