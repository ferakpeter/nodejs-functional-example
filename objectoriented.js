// everything is an object

// pre-ES6
var ApplicationNamePart = function (value) {
	this.value = value;
};

// potentially empty string
ApplicationNamePart.prototype.empty = function () {
  return typeof this.value === 'undefined' || !(this.value);
};
ApplicationNamePart.prototype.nonEmpty = function () {
  return !this.empty();
};

// potentially slashed string
ApplicationNamePart.prototype.removeSlashes = function () {
  return this.value.replace(/\//g, '_');
};

// potentially numbered string
ApplicationNamePart.prototype.mapNumbers = function () {
  return this.value.replace("1", "one");
};


ApplicationNamePart.prototype.getValue = function() {
	if (this.nonEmpty())
	{
		this.value = this.removeSlashes();
		// this.value = this.mapNumbers();
		return this.value;
	}
};

var ApplicationName = function () {};
ApplicationName.prototype.parse = function (values) {
	// pretend I don't have a join function out of the box
	var applicationName = "";
	for (var i = 0; i < values.length - 1; i++) {
		applicationName += values[i].nonEmpty() ? values[i].getValue() + "." : "";
	}
	applicationName += values[values.length - 1].getValue();
	return applicationName;

	// using join()
	// return values.map(function(v) { return v.getValue(); }).join('.');
};

function createApplicationName (project, pipelineName) {
  var projectNamespace = new ApplicationNamePart(project.namespace);
  var projectRepository = new ApplicationNamePart(project.repository);
  var projectSubfolder = new ApplicationNamePart(project.subfolder);
  var projectBranch = new ApplicationNamePart(project.branch);
  var projectPipeline = new ApplicationNamePart(pipelineName);

  var appName = new ApplicationName();
  return appName.parse([projectNamespace, projectRepository, projectSubfolder, projectBranch, projectPipeline]);
}

exports.CreateApplicationName = createApplicationName;


// ES6
// class ApplicationNamePart {
// 	constructor(value) {
// 		this.value = value;
// 	}

// 	getValue() {
// 		return nonEmpty(this.value) ? removeSlashes(this.value) : null;
// 	}
// }