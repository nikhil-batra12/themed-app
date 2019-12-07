exports.login = login;
exports.logout = logout;
exports.userDetails = userDetails;

function login(req, res) {
    res.end(JSON.stringify(require('../responses/admin/login/login.json')));
}

function logout(req, res) {
    res.end(JSON.stringify(require('../responses/admin/login/logout.json')));
}

function userDetails(req, res) {
    res.end(JSON.stringify(require('./responses/user/userDetails.json')));
}