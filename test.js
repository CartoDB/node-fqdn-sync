const fqdn = require('./index');
const assert = require('assert');

describe('fqdn-sync', function () {
    it('should get fully qualified domain name', function () {
        assert.ok(fqdn())
    });

    it('should get fully qualified domain name reversed', function () {
        const hostname = fqdn();
        const reverseHostname = hostname.split('.').reverse().join('.');

        assert.equal(reverseHostname, fqdn.reverse())
    });

    it('should get hostname', function () {
        const hostname = fqdn().split('.').pop();

        assert.equal(hostname, fqdn.hostname())
    });
});
