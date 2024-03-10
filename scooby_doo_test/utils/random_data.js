"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomData = void 0;
const lodash_1 = require("lodash");
class RandomData {
    randomGang() {
        const gangs = [
            "Scooby-Doo",
            "Shaggy Rogers",
            "Fred Jones",
            "Daphne Blake",
            "Velma Dinkley"
        ];
        return (0, lodash_1.sample)(gangs);
    }
    randomRelationship() {
        const relationships = [
            "Father",
            "Mother",
            "Sister",
            "Brother",
            "Cousin",
            "Aunt",
            "Uncle",
            "Grandfather",
            "Grandmother",
            "Grandson",
            "Granddaughter",
            "Great-Grandfather",
            "Great-Grandmother",
            "Great-Grandson",
            "Great-Granddaughter"
        ];
        return (0, lodash_1.sample)(relationships);
    }
}
exports.RandomData = RandomData;
