let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 20;

// if (runnerAge > 18 && registerEarly) {
//     console.log(raceNumber + 1000);
// }

if(runnerAge > 18 && registerEarly) {
    console.log(`Your race will start at 9:30AM with bib # ${raceNumber + 1000}`);
} else if(runnerAge > 18 && registerEarly === false) {
    console.log(`Your race will start at 11AM with bib # ${raceNumber}`);
} else if(runnerAge < 18) {
    console.log(`Your race will start at 12:30PM with bib # ${raceNumber}`);
}
