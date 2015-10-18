(function () {
    'use strict';

    var XP = require('expandjs'),
        fileParser = require('lol-file-parser');

    module.exports = fileParser({

        name: 'CacFile',

        parse: function (parser, cb) {
            cb(null, parser.stringView().join(''));
        },

        read: function (data, cb) {
            var lines = data.split(/\r\n|\n/);

            // Remove comments
            lines = XP.filter(lines, function (line) {
                return !line.match(/^\s*\/\//);
            });

            lines = lines.join('');

            cb(null, JSON.parse(lines));
        }

    });

}());
