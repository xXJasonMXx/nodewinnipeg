let weekdayNumber = 10;
let weekday;

switch(weekdayNumber) {
    case 1:
        weekday = 'Today it\'s Monday'
        break;

    case 2:
        weekday= 'Today it\'s Tuesday'
        break;

    case 3:
        weekday = 'Today it\'s Wednsday'
        break;

    case 4:
        weekday = 'Today it\'s Thursday'
        break;

    case 5:
        weekday = 'Today it\'s Friday'
        break;

    case 6:
        weekday = 'Today it\'s Saturday'
        break;

    case 7:
        weekday = 'Today it\'s Sunday'
        break;

    default:
        weekday = 'error'
}

console.log(weekday);