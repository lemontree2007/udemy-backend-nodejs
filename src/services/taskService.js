const Task = require("../models/task");
const aqp = require("api-query-params");
const postTaskService = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let result = await Task.create(data);
    return result;
  }
};
const getTaskService = async (queryString) => {
  const page = queryString.page;
  const { filter, limit } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit;
  result = await Task.find({ filter }).skip(offset).limit(limit).exec();
  return result;
};

const uTaskService = async (data) => {
  try {
    let update = await Task.updateOne({ _id: data.taskId }, { ...data });
    return update;
  } catch (error) {
    console.log(error);
  }
  return result;
};

const dTaskService = async (id) => {
  try {
    let update = await Task.deleteById(id);
    return update;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postTaskService,
  getTaskService,
  uTaskService,
  dTaskService,
};
