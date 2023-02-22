const returnFirstTwoDrivers = function(namesArray) {
    return namesArray.slice(0, 2);
}

const returnLastTwoDrivers = function(namesArray) {
    return namesArray.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(namesArray, func) {
    return func(namesArray);
}