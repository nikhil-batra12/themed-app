const productsList = (req, res) => {
    res.end(JSON.stringify(require('../responses/admin/products/getProducts.json')));
}
const sliderImages = (req, res) => {
    res.end(JSON.stringify(require('../responses/products/sliderImages.json')));
}

const submitEnquiry = (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(require('../responses/products/submitEnquiry.json')));
}

const addProduct = (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(require('../responses/admin/products/addProduct.json')));
}

const editProduct = (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(require('../responses/admin/products/editProduct.json')));
}
const deleteProduct = (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(require('../responses/admin/products/deleteProduct.json')));
}

exports.sliderImages = sliderImages;
exports.productsList = productsList;
exports.submitEnquiry = submitEnquiry;
exports.addProduct = addProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;
