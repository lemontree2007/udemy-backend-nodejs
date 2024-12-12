const {
  postTaskService,
  getTaskService,
  uTaskService,
  dTaskService,
} = require("../services/taskService");

const postCreateTaskAPI = async (req, res) => {
  let createTask = await postTaskService(req.body);
  return res.status(200).json({
    error: 0,
    data: createTask,
  });
};
const getTaskAPI = async (req, res) => {
  let getTask = await getTaskService(req.query);
  return res.status(200).json({
    error: 0,
    data: getTask,
  });
};

const uTaskAPI = async (req, res) => {
  let getTask = await uTaskService(req.body);
  return res.status(200).json({
    error: 0,
    data: getTask,
  });
};
const dTaskAPI = async (req, res) => {
  let getTask = await dTaskService(req.body.id);
  return res.status(200).json({
    error: 0,
    data: getTask,
  });
};

module.exports = {
  postCreateTaskAPI,
  getTaskAPI,
  uTaskAPI,
  dTaskAPI,
};
