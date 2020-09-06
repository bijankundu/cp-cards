# GitHub CP Rating Card 📇

What if there are cards on Github profile that shows our Codeforces ratings with the rating colour as well?

This API helps you create your custom profile cards with max rating in Codechef, Codeforces and Atcoder.

Maybe you can flaunt more with your coding cards now.

<br>

---

<br>

## 📝Parameters

`name <optional>` - your own name

`codeforces <optional>` - your <a href="https://codeforces.com/">codeforces</a> userID

`codechef <optional>` - your <a href="https://www.codechef.com/">codechef</a> userID

`atcoder <optional>` - your <a href="https://atcoder.jp/">atcoder</a> userID

<br>

---

<br>

## 🔍 Usage

Copy paste this into your markdown content, and that's it. Simple!

Change the `?name=` value to your own name.

Change the `?codeforces=` value to your codeforces's username.

Change the `?codechef=` value to your codechef's username.

Change the `?atcoder=` value to your atcoder's username.

```md
<img src="https://cp-cards.herokuapp.com?name=Gennady Korotkevich&codeforces=tourist&codechef=gennady.korotkevich&atcoder=tourist"/>
```

This corresponds to

<img src="https://cp-cards.herokuapp.com?name=Gennady Korotkevich&codeforces=tourist&codechef=gennady.korotkevich&atcoder=tourist"/>

<br>

---

<br>

## 💡 Fun Fact

The color of the rating changes as your maximum rating according to the website's policy.

## Contributing

Feel free to open a pull requests. For major changes, please open an issue first to discuss what you would like to change.

<br>

---

<br>

## 👷 Setup

### Run locally

- Clone the Repo

```
$ git clone https://github.com/bijankundu/cp-cards.git

$ cd cp-cards
```

- Install the dependencies

```
npm install
```

- Run the API

```
node index.js
```

> If you like this project please ⭐ this repo.
