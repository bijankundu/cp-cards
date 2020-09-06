let Xray = require("x-ray");
const axios = require("axios");
let x = Xray();

module.exports = {
  codechef: async (userId) => {
    let obj = await x(
      "https://www.codechef.com/users/" + userId,
      ".rating-header",
      [{ rating: "small@text" }]
    );
    let rating = obj[0].rating;
    rating = rating.split(" ");
    //   console.log(rating[2].split(")")[0]);
    rating = rating[2].split(")")[0];
    // console.log(t);
    return rating;
  },

  codeforces: async (userId) => {
    let obj = await axios.get(
      "https://codeforces.com/api/user.info?handles=" + userId
    );
    let rating = obj.data.result[0].maxRating;
    return rating;
  },

  atcoder: async (userId) => {
    let obj = await x("https://atcoder.jp/users/" + userId, ".dl-table", [
      { rating: "" },
    ]);
    let rating = obj[1].rating;
    rating = rating.replace(/\s/g, " ");
    rating = rating.split(" ");
    let newArray = [];
    rating = rating.forEach((element) => {
      if (element != "") newArray.push(element);
    });
    for (let i = 0; i < newArray.length; i++)
      if (newArray[i] == "―") {
        rating = newArray[i - 1];
        break;
      }
    return rating;
  },
};
