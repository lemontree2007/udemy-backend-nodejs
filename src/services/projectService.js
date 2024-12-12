const Project = require("../models/project");
const aqp = require("api-query-params");

const postProjectService = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USERS") {
    let addusers = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.usersArr.length; i++) {
      if (!addusers.usersInfor.includes(data.usersArr[i])) {
        addusers.usersInfor.push(data.usersArr[i]);
      } else {
        console.log(`User ID ${data.usersArr[i]} already exists`);
      }
    }
    let result = await addusers.save();
    return result;
  }
  if (data.type === "REMOVE-USERS") {
    let removeusers = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.usersArr.length; i++) {
      if (removeusers.usersInfor.includes(data.usersArr[i])) {
        removeusers.usersInfor.pull(data.usersArr[i]);
      } else {
        console.log(`User ID ${data.usersArr[i]} not already`);
      }
    }
    let result = await removeusers.save();
    return result;
  }
  if (data.type === "ADD-TASKS") {
    let addtask = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.taskArr.length; i++) {
      if (!addtask.tasks.includes(data.taskArr[i])) {
        addtask.tasks.push(data.taskArr[i]);
      } else {
        console.log(`User ID ${data.taskArr[i]} already exists`);
      }
    }
    let result = await addtask.save();
    return result;
  }
};

const getProjectService = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit;
  result = await Project.find({ filter })
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const putProjectService = async (data) => {
  try {
    let update = await Project.updateOne({ _id: data.projectId }, { ...data });
    return update;
  } catch (error) {
    console.log(error);
  }
};

const deleteProjectService = async (id) => {
  try {
    let update = await Project.deleteById(id);
    return update;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  postProjectService,
  getProjectService,
  putProjectService,
  deleteProjectService,
};
