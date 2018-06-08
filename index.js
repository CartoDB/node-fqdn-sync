const execSync = require('child_process').execSync;
const host = execSync('hostname -f').toString('utf8').replace(/\n/g, '');
const reverse = host.split('.').reverse().join('.');

module.exports = function () {
    return host;
}

module.exports.reverse = function () {
    return host.split('.').reverse().join('.');
}
