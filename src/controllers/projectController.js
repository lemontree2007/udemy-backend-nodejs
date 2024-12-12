const {
  postProjectService,
  getProjectService,
  putProjectService,
  deleteProjectService,
} = require("../services/projectService");

const postCreateProjectAPI = async (req, res) => {
  let createProject = await postProjectService(req.body);
  return res.status(200).json({
    error: 0,
    data: createProject,
  });
};
const getProjectAPI = async (req, res) => {
  let result = await getProjectService(req.query);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};
const putProjectAPI = async (req, res) => {
  let update = await putProjectService(req.body);
  return res.status(200).json({
    error: 0,
    data: update,
  });
};

const deleteProjectAPI = async (req, res) => {
  let removeProject = await deleteProjectService(req.body.id);
  return res.status(200).json({
    error: 0,
    data: removeProject,
  });
};

module.exports = {
  postCreateProjectAPI,
  getProjectAPI,
  putProjectAPI,
  deleteProjectAPI,
};
