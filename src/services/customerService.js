const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;

  } catch (error) {
    console.log(error);
    return null
  }
};

const getCustomersService = async () => {
  try {
    let result = await Customer.find({}).exec();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateCustomerService = async (name, address, phone, email, description, customerId) => {
  try {
    let update = await Customer.updateOne(
      {
        _id: customerId,
      },
      {
        name, address, phone, email, description
      }
    );
    return update;
  } catch (error) {
    console.log(error);
  }
};

const deleteCustomerService = async (id) => {
  try {
    let deleteCustomer = await Customer.deleteById(id);
    return deleteCustomer;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getCustomersService,
  updateCustomerService,
  deleteCustomerService
};
