import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);

console.log(`Man United has won ${manUnitedWins} times`)

/*

if it is a limited number of options and you know all the options from the begining and those options dont change frequently over time, you can use an Enum
Eg: Use it for the sizes of beverage in a coffee shop. Dont use it for names of blogposts in a blog. 

using enums - enumeration - enum is a data type in TS
We use enums to make it easier to other engineers to read the code
--------------------------

insted of row comparason
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++
  }
};
-----------------------------
or using an object 
const MatchResults = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
}
*/