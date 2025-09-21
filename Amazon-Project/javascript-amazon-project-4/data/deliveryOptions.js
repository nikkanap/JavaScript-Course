import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

export const deliveryOptions = [
    {
        id: '1',
        deliveryDays: 7,
        priceCents: 0
    },
    {
        id: '2',
        deliveryDays: 3,
        priceCents: 499
    },
    {
        id: '3',
        deliveryDays: 1,
        priceCents: 999
    }

];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        }
    });
    return deliveryOption || deliveryOption[0];
}

export function calculateDeliveryOptions(option) {
    const today = dayjs();
    let deliveryDate = today.add(option.deliveryDays, 'days');
    let dateOfWeek = deliveryDate.format('dddd');

    if(isWeekend(deliveryDate)){
        deliveryDate = deliveryDate.add((dateOfWeek === 'Saturday') ? 2 : 1, "days");
        dateOfWeek = deliveryDate.format('dddd');
    }

    const dateString = deliveryDate.format('dddd, MMMM D');
    return dateString;
}

function isWeekend(date) {
    let dateOfWeek = date.format('dddd');
    if(dateOfWeek === 'Saturday' || dateOfWeek === 'Sunday')
        return dateOfWeek;
}