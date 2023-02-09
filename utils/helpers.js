// module.exports = {
//   format_date: (date) => {
//     const dateObj = new Date();
//     return `${dateObj.getUTCMonth() + 1}/${dateObj.getUTCDate() - 1}/${dateObj.getUTCFullYear()}`;

//     // return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(
//     //   date
//     // ).getFullYear()}`;
//   },
// };

const { format } = require("date-fns");

module.exports = {
  format_date: (date) => {
    const dateObj = new Date();
    return `${format(dateObj, "MM-dd-yyyy")}`;
  },
};
