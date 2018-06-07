const fs = require("fs");
const path = require("path");
const Utils = require("./Utils");

class WallpaperRegistry {
    constructor (base_path) {
        this.base_path = base_path;
    }

    files(collection) {
        let joined = path.join(this.base_path, collection);
        let files = fs.readdirSync(joined);
        return Utils.forEachToArray(files, function (filename) {
            return {
                title: path.parse(filename).name,
                url: path.join(collection, filename),
                absolute_path: path.join(joined, filename) 
            }
        });
    }
}

class WallpaperSelectionStrategy {
    constructor () {
    }

    select(candidates) {
        if (candidates.length == 0) return undefined;
        let dofm = new Date().getDate();
        return candidates[dofm % candidates.length];
    }
}

module.exports = {
    'WallpaperRegistry': WallpaperRegistry,
    'WallpaperSelectionStrategy': WallpaperSelectionStrategy
};