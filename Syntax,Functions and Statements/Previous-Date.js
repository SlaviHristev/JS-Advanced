function previousDay(year, month, day) {
    
    const currentDate = new Date(year, month - 1, day); 


    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);


    const prevYear = previousDate.getFullYear();
    const prevMonth = previousDate.getMonth() + 1; 
    const prevDay = previousDate.getDate();

    const formattedResult = `${prevYear}-${prevMonth}-${prevDay}`;

    console.log(formattedResult);

}


previousDay(2016, 9, 30)