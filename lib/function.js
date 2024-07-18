function daysCalc(dateStr) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const dateArray = [day, month, year];
  const arrDataFromDatabase = dateStr.split("-").map((ele) => {
    return parseInt(ele);
  });
  const startDate = new Date(
    arrDataFromDatabase[2],
    arrDataFromDatabase[1] - 1,
    arrDataFromDatabase[0]
  );
  const endDate = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]); // Month is zero-based

  const differenceMs = endDate - startDate;
  const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  return differenceDays;
}
module.exports = daysCalc;
