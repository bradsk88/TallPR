import {Animal, animals} from './animals';

// cmHeight heights are measured in cm.

const textLineHeightOnA4 = 0.4217517642175;

export function getHeightAnalog(linesOfCode: number): Animal {
  if (linesOfCode === 0) {
    throw new Error("0 is an invalid height for an analog");
  }

  const cmHeight = linesOfCode * textLineHeightOnA4;

  for (var i = 0; i < animals.length; i++) {
    if (cmHeight < animals[i].heightCm) {
      return animals[i];
    }
  }

  return {
    conjunction: 'an',
    name: 'unladen swallow (this is an error in the bot :\)',
    heightCm: 0,
  };
}
