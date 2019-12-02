const productsList = (req, res) => {
    res.end(JSON.stringify(require('../responses/products/productsList.json')));
}
const sliderImages = (req, res) => {
    res.end(JSON.stringify(require('../responses/products/sliderImages.json')));
}

const submitEnquiry = (req, res) => {
    console.log(req.body);
    res.end(JSON.stringify(require('../responses/products/submitEnquiry.json')));
}

exports.sliderImages = sliderImages;
exports.productsList = productsList;
exports.submitEnquiry = submitEnquiry;
