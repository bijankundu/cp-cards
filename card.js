const data = require("./data");

module.exports = async (query, res) => {
  let rating = {
    codeforces: "-",
    codechef: "-",
    atcoder: "-",
  };

  let ratingColor = {
    codeforces: "rgb(255, 255, 255)",
    codechef: "rgb(255, 255, 255)",
    atcoder: "rgb(255, 255, 255)",
  };

  for (const [key, value] of Object.entries(query)) {
    if (key == "codeforces") {
      rating[key] = await Promise.resolve(data.codeforces(value));
      let rate = Number(rating[key]);
      if (rate <= 1199) {
        ratingColor[key] = "#cec8c1";
      } else if (rate > 1199 && rate <= 1399) {
        ratingColor[key] = "#43A217";
      } else if (rate > 1399 && rate <= 1599) {
        ratingColor[key] = "#22C4AE";
      } else if (rate > 1599 && rate <= 1899) {
        ratingColor[key] = "#1427B2";
      } else if (rate > 1899 && rate <= 2199) {
        ratingColor[key] = "#700CB0";
      } else if (rate > 2199 && rate <= 2399) {
        ratingColor[key] = "#F9A908";
      } else {
        ratingColor[key] = "#FF0000";
      }
    } else if (key == "codechef") {
      {
        rating[key] = await Promise.resolve(data.codechef(value));
        let rate = Number(rating[key]);
        if (rate <= 1399) {
          ratingColor[key] = "#6A6860";
        } else if (rate > 1399 && rate <= 1599) {
          ratingColor[key] = "#3D8C0B";
        } else if (rate > 1599 && rate <= 1799) {
          ratingColor[key] = "#347FBD";
        } else if (rate > 1799 && rate <= 1999) {
          ratingColor[key] = "#7A4AAF";
        } else if (rate > 1999 && rate <= 2199) {
          ratingColor[key] = "#FFC300";
        } else if (rate > 2199 && rate <= 2499) {
          ratingColor[key] = "#FF9E1B";
        } else {
          ratingColor[key] = "#FF1B1B";
        }
      }
    } else if (key == "atcoder") {
      rating[key] = await Promise.resolve(data.atcoder(value));
      let rate = Number(rating[key]);
      if (rate <= 399) {
        ratingColor[key] = "#8E8E81";
      } else if (rate > 399 && rate <= 799) {
        ratingColor[key] = "#81501B";
      } else if (rate > 799 && rate <= 1199) {
        ratingColor[key] = "#5CB01E";
      } else if (rate > 1199 && rate <= 1599) {
        ratingColor[key] = "#16E5D8";
      } else if (rate > 1599 && rate <= 1999) {
        ratingColor[key] = "#1642E5";
      } else if (rate > 1999 && rate <= 2399) {
        ratingColor[key] = "#CFE115";
      } else if (rate > 2399 && rate <= 2799) {
        ratingColor[key] = "#FF8700";
      } else {
        ratingColor[key] = "#FF0000";
      }
    }
  }

  let svg = ` <svg
  width="300"
  height="170"
  viewBox="0 0 300 170"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <style>
    .header {
      font: 700 18px "Segoe UI", Ubuntu, Sans-Serif;
      fill: rgb(255, 255, 255);
      animation: fadeInAnimation 0.8s ease-in-out forwards;
    }

    .site {
      font: 600 16px "Segoe UI", Ubuntu, Sans-Serif;
      fill: rgb(255, 255, 255);
    }

    .codeForces{
        fill: ${ratingColor.codeforces};
        font: 700 16px "Segoe UI", Ubuntu, Sans-Serif;
    }

    .codeChef{
        fill: ${ratingColor.codechef};
        font: 700 16px "Segoe UI", Ubuntu, Sans-Serif;
    }

    .atCoder{
        fill:${ratingColor.atcoder};
        font: 700 16px "Segoe UI", Ubuntu, Sans-Serif;
    }

    .rating {
      font: 600 16px "Segoe UI", Ubuntu, Sans-Serif;
      fill: rgb(255, 255, 255);
    }
  </style>

  undefined

  <rect
    data-testid="card-bg"
    x="0.5"
    y="0.5"
    rx="4.5"
    height="99%"
    stroke="#E4E2E2"
    width="299"
    fill="#141321"
    stroke-opacity="1"
  />

  <g data-testid="card-title" transform="translate(25, 30)">
    <text
      x="0"
      y="0"
      class="header"
      data-testid="header"
      letter-spacing="2"
    >
      ${query.name}
    </text>
  </g>
  <g data-testid="codeforces" transform="translate(25, 65)">
    <g transform="translate(0, -10)">
      <image
        href="https://lh3.googleusercontent.com/WsR_f03nbqW3qZjCZeXUYmnmhSWXo3hQhLX9hgl9QHydCgbXQi_VJeAwnmtuIgTHKdQ"
        height="20"
        width="20"
      />
    </g>
    <g transform="translate(30, 5)">
      <text x="0" y="0" class="site" data-testid="header">Codeforces</text>
    </g>
    <g transform="translate(150, 5)">
      <text x="0" y="0" class="codeForces" data-testid="header">${rating.codeforces}</text>
    </g>
  </g>
  <g data-testid="codechef" transform="translate(25, 100)">
    <g transform="translate(0, -10)">
      <image
        href="https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg"
        height="20"
        width="20"
      />
    </g>
    <g transform="translate(30, 5)">
      <text x="0" y="0" class="site" data-testid="header">Codechef</text>
    </g>
    <g transform="translate(150, 5)">
      <text x="0" y="0" class="codeChef" data-testid="header">${rating.codechef}</text>
    </g>
  </g>
  <g data-testid="atcoder" transform="translate(25, 137)">
    <g transform="translate(0, -10)">
      <image
        href="https://img.atcoder.jp/assets/atcoder.png"
        height="20"
        width="20"
      />
    </g>
    <g transform="translate(30, 5)">
      <text x="0" y="0" class="site" data-testid="header">At Coder</text>
    </g>
    <g transform="translate(150, 5)">
      <text x="0" y="0" class="atCoder" fill="data-testid" ="header">
      ${rating.atcoder}
      </text>
    </g>
  </g>
</svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
};
