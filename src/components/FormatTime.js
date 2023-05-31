export const FormatTime = (unformattedTime) => {
    const date = new Date(unformattedTime);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }
  