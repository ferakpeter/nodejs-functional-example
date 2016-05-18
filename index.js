function nonEmpty (value) {
	return !empty(value);
}

function empty (value) {
	return typeof value === 'undefined' || !(value);
}

// function mapNumbers (value) {
// 	return value.replace("1", "one");
// }

// Generate Jenkins Job name from SCM URL
function parse(project, pipelineName) {
	var name = [project.namespace, project.repository, project.subfolder, project.branch.replace(/\//g, '_'), pipelineName, project.foo];
	return name.filter(nonEmpty).join('.');
}

exports.Parse = parse;