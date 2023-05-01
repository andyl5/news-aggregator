// export const FormatTime = (unformattedTime) => {
//     var timeStr = unformattedTime
//     var date = new Date(timeStr);
//     var day = date.getDate();
//     var year = date.getFullYear();
//     var month = date.getMonth()+1;
//     var dateStr = month+"/"+day+"/"+year;
//     return dateStr
// }
// // "2023-04-27T19:41:17Z"

export const FormatTime = (unformattedTime) => {
    const date = new Date(unformattedTime);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }
  