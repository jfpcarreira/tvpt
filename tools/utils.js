var env = require('dotenv').config();

module.exports = {

    // Returns the URI connection for Mongo DB Atlas
    getMongoUri: function (env) {
        return env.DB_URL +
            env.DB_USERNAME + ":" +
            env.DB_PASSWORD + "@" +
            env.DB_NODE_PRIMARY + ":" +
            env.DB_PORT + "," +
            env.DB_NODE_SECONDARY1 + ":" +
            env.DB_PORT + "," +
            env.DB_NODE_SECONDARY2 + ":" +
            env.DB_PORT + "/" +
            env.DB_NAME + "?" +
            env.DB_OPTIONS;
    },

    // Validates if the request comes from a valid source (only some devices allowed)
    isValidSource: function (req) {
        var ua = this.getUserAgentInfo(req);
        if (ua.isMobile) {
            return false;
        }

        if (ua.iOS || ua.iPhone || ua.iPad) { // Validar com o iPhone para ver se é mm comportamento que android
            return false;
        }

        if (ua.windows || ua.mac || ua.webOS) {
            return false;
        }

        return true;
    },

    // Returns an object with the user agent info 
    getUserAgentInfo: function (req) {
        var ua = req.headers['user-agent'],
            $ = {};

        if (/mobile/i.test(ua)) {
            $.isMobile = true;
        }

        if (/like Mac OS X/.test(ua)) {
            $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
            $.iPhone = /iPhone/.test(ua);
            $.iPad = /iPad/.test(ua);
        }

        if (/Android/.test(ua)) {
            $.android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];
        }

        if (/webOS\//.test(ua)) {
            $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];
        }

        if (/(Intel|PPC) Mac OS X/.test(ua)) {
            $.mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;
        }

        if (/Windows NT/.test(ua)) {
            $.windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
        }

        return $;
    }

};
