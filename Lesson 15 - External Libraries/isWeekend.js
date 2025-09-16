//15e and 15f
export default function isWeekend(date){
    const week = date.format('dddd');
    if(week === 'Sunday' || week === 'Saturday')
        return week;
}