"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animals = void 0;
exports.animals = [
    {
        conjunction: 'a',
        name: 'LadyBug',
        heightCm: 1,
    },
    {
        conjunction: 'a',
        name: 'Bumble Bee',
        heightCm: 2.5,
    },
    {
        conjunction: 'an',
        name: 'Etruscan Shrew',
        heightCm: 3.5,
    },
    {
        conjunction: 'a',
        name: 'Common Frog',
        heightCm: 6,
    },
    {
        conjunction: 'a',
        name: 'Pine Marten',
        heightCm: 12.5,
    },
    {
        conjunction: 'an',
        name: 'Eastern Gray Squirrel',
        heightCm: 25,
    },
    {
        conjunction: 'an',
        name: 'Indian Pangolin',
        heightCm: 45,
    },
    {
        conjunction: 'a',
        name: 'Mountain Goat',
        heightCm: 90,
    },
    {
        conjunction: 'a',
        name: 'female Lion',
        heightCm: 110,
    },
    {
        conjunction: 'a',
        name: 'American White Pelican',
        heightCm: 120,
    },
    {
        conjunction: 'an',
        name: 'average adult female Canadian',
        heightCm: 163.9,
    },
    {
        conjunction: 'an',
        name: 'average adult male Canadian',
        heightCm: 178.1,
    },
    {
        conjunction: 'a',
        name: 'Silverback Gorilla',
        heightCm: 195,
    },
    {
        conjunction: 'an',
        name: 'Asian Elephant',
        heightCm: 350,
    },
    {
        dimension: 'long',
        conjunction: 'a',
        name: 'Crocodile',
        heightCm: 450,
    },
    {
        conjunction: 'an',
        name: 'Northern Giraffe',
        heightCm: 500,
    },
    {
        conjunction: 'a',
        name: 'three story apartment',
        heightCm: 900,
    },
    {
        conjunction: 'a',
        name: 'one story House',
        heightCm: 1800,
    },
    {
        dimension: 'long',
        conjunction: 'a',
        name: 'Blue Whale',
        heightCm: 2500,
    },
    {
        conjunction: 'an',
        name: 'Air Traffic Control Tower',
        heightCm: 4100,
    },
    {
        dimension: 'long',
        conjunction: 'a',
        name: 'Boeing 747',
        heightCm: 7630,
    },
    {
        dimension: 'long',
        conjunction: 'a',
        name: 'regulation Football Field',
        heightCm: 9144,
    },
    {
        dimension: 'long',
        conjunction: 'the',
        name: 'Normandy SR-2',
        heightCm: 17000,
    },
    {
        dimension: 'long',
        conjunction: 'the',
        name: 'USS Enterprise',
        heightCm: 30000,
    },
].sort(function (a, b) { return compareAnimals(a, b); });
function compareAnimals(a, b) {
    if (a.heightCm > b.heightCm) {
        return 1;
    }
    if (a.heightCm < b.heightCm) {
        return -1;
    }
    return 0;
}
//# sourceMappingURL=animals.js.map