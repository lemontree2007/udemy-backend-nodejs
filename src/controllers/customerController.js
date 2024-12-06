const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService");
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

module.exports = {
  postCustomerAPI,
};
