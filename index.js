const execSync = require('child_process').execSync;
const host = execSync('hostname -f').toString('utf8').replace(/\n/g, '');

module.exports = function () {
    return host;
};

module.exports.reverse = function () {
    return host.split('.').reverse().join('.');
};

module.exports.hostname = function () {
    return host.split('.').shift();
};
