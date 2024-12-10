const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
} = require("../services/customerService");

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
  let limit = req.query.limit;
  let page = req.query.page;
  let name = req.query.name;
  let result = null;
  if (limit && page) {
    result = await getCustomersService(limit, page, name, req.query);
  } else {
    result = await getCustomersService();
  }
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

const putCustomersAPI = async (req, res) => {
  let { name, address, phone, email, description, customerId } = req.body;
  let result = await updateCustomerService(
    name,
    address,
    phone,
    email,
    description,
    customerId
  );
  return res.status(200).json({
    error: 0,
    data: result,
  });
};

const deleteCustomerAPI = async (req, res) => {
  let id = req.body.id;
  let result = await deleteCustomerService(id);
  return res.status(200).json({
    error: 0,
    data: result,
  });
};
const deleteArrCustomerAPI = async (req, res) => {
  let ids = req.body.customerId;
  let result = await deleteArrCustomerService(ids);
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
  deleteCustomerAPI,
  deleteArrCustomerAPI,
};
