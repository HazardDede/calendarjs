"use strict";

const fs = require("fs");
const path = require("path");
const Utils = require("./Utils");

class Playlist {
    constructor (base_path) {
        this.base_path = base_path;
    }

    files(playlist) {
        let joined = path.join(this.base_path, playlist);
        let mp3s = fs.readdirSync(joined);
        return Utils.forEachToArray(mp3s, function (filename) {
            return {
                title: path.parse(filename).name,
                url: path.join(playlist, filename),
                absolute_path: path.join(joined, filename) 
            }
        });
    }
}

module.exports = Playlist;