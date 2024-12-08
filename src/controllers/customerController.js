const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService, createArrayCustomerService, getCustomersService, updateCustomerService, deleteCustomerService } = require("../services/customerService");
const postCustomerAPI = async (req, res) => {
  let { name, address, phone, email, description } = req.body;
  let imageURL = "";
  if (!req.files || Object.keys(req.files).length === 0) {
  } else {
    let result = await uploadSingleFile(req.files.image);
    imageURL = result.path;
  }
  let customerData = {
    name,
    address,
    phone,
    email,
    description,
    image: imageURL,
  };
  let customer = await createCustomerService(customerData);
  return res.status(200).json({
    error: 0,
    data: customer,
  });
};

const postArrayCustomerAPI = async (req, res) => {
  let customers = await createArrayCustomerService(req.body.customers);
  if (customers) {
    return res.status(200).json({
      error: 0,
      data: customers,
    });
  } else {
    return res.status(200).json({
      error: -1,
      data: customers,
    });
  }
};

const getCustomersAPI = async (req, res) => {
  let result = await getCustomersService();
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

const putCustomersAPI = async (req, res) => {
  let { name, address, phone, email, description, customerId } = req.body;
  let result = await updateCustomerService(name, address, phone, email, description, customerId);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

const deleteCustomerAPI = async (req, res) => {
  const id = req.body.id;
  let result = deleteCustomerService(id);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

module.exports = {
  postCustomerAPI,
  postArrayCustomerAPI,
  getCustomersAPI,
  putCustomersAPI,
  deleteCustomerAPI
};
