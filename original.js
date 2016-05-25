// whack a bug

function createApplicationName (project, pipelineName) {
  var ret = '';

  ret = project.namespace + '.' + project.repository;
  ret += (project.subfolder === undefined || project.subfolder=='') ? '' : '.' + project.subfolder;
  ret += '.' + project.branch.replace(/\//g, '_');
  ret += (pipelineName === undefined) ? '' : '.' + pipelineName;

  //console.log(ret);
  return ret;
}

exports.CreateApplicationName = createApplicationName;