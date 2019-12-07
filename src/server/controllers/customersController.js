const getCustomers = (req, res) => {
    res.end(JSON.stringify(require('../responses/admin/customers/getCustomers.json')));
}
const editCustomer = (req, res) => {
    res.end(JSON.stringify(require('../responses/admin/customers/editCustomer.json')));
}
const deleteCustomer = (req, res) => {
    res.end(JSON.stringify(require('../responses/admin/customers/deleteCustomer.json')));
}
const addCustomer = (req, res) => {
    res.end(JSON.stringify(require('../responses/admin/customers/addCustomer.json')));
}

exports.getCustomers = getCustomers;
exports.editCustomer = editCustomer;
exports.deleteCustomer = deleteCustomer;
exports.addCustomer = addCustomer;
