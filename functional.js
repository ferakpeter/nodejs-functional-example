// Array is list of elements, stateless functions executed on each element of the list to manipulate data

function nonEmpty (value) {
  return !empty(value);
}

function empty (value) {
  return typeof value === 'undefined' || !(value);
}

function removeSlashes (value) {
  return value.replace(/\//g, '_');
}

function mapNumbers (value) {
  return value.replace("1", "one");
}

// Generate Jenkins Job name from SCM URL
function createApplicationName(project, pipelineName) {
  var name = [project.namespace, project.repository, project.subfolder, project.branch, pipelineName, project.foo];
  return name.filter(nonEmpty).map(removeSlashes).join('.');
}

exports.CreateApplicationName = createApplicationName;