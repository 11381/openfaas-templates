const fs = require("fs");

function getSecret(secret) {
    return fs.readFileSync(`/var/openfaas/secrets/${secret}`, "utf8").trim();
}

module.exports = getSecret;