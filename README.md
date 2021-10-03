# 🌎 Team Timezones

Team Timezones allows you to store the names and geographical locations of your team members in a local JSON file. The app uses a client side JavaScript library called [date-fns-tz](https://github.com/marnusw/date-fns-tz) to calculate the time in each team members timezone. If you work within a distributed team, this is the app for you!

#### Demo: [https://ksteamtimezones.gatsbyjs.io/](https://ksteamtimezones.gatsbyjs.io/)

<br />
<hr/>
<br />

## 🚀 Getting Started

To get started follow the steps outlined below

### 1. 💕 Clone this GitHub Repository

From your terminal run the following command

```shell
git clone https://github.com/PaulieScanlon/ks-team-timezones.git
```

### 2. 🧱 Install the dependencies

From your terminal run the following command

```shell
npm install
```

### 3. 🏎️ Start Gatsby's development server

From your terminal run the following command

```shell
npm run develop

```

### 4. 👀 Preview the app

Visit the following URL in your browser

[http://localhost:8000/](http://localhost:8000/)

<br />
<hr/>
<br />

## 📦 What's inside?

Have a look inside `src/data/` and you should see a file called `team.json`. The data shape looks a little like this 👇

```json
[
  {
    "name": "Bert",
    "continent": "America",
    "locale": "Los_Angeles",
    "city": "Seattle"
  },
  {
    "name": "Ernie",
    "continent": "Europe",
    "locale": "London",
    "city": "Brighton"
  }
]
```

The object keys are as follows:

| value     | type   | required | description                   |
| --------- | ------ | -------- | ----------------------------- |
| name      | string | true     | The name of the team member   |
| continent | string | true     | A valid TZ database continent |
| locale    | string | true     | A valid TZ database locale    |
| city      | string | true     | A friendly city name          |

### ⏱️ TZ Database Time Zones

See the following Wikipedia link for a list of valid TZ database names [List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

The locale time is calculated by [date-fns-tz](https://github.com/marnusw/date-fns-tz) using a template literal constructed by using both the `continent` and `local`. E.g `${continent/locale}` which, for Bert would translate to `America/Los_Angeles`.

Since some locales aren't always the city where you team member is located you can use the `city` object key as a _friendly name_ to display in each of the Team Cards.

### ✏️ Team Card

To modify the details displayed in each card make changes to the following file [src/components/team-card.js](./src/components/team-card.js)

<br />
<hr/>
<br />

## 💅 CSS

This app has been styled using [Tailwind CSS](https://tailwindcss.com/). For more information regarding Gatsby specific configuration visit the docs: [Install Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby)

<br />
<hr/>
<br />

## 🤔 Ideas

- Add emojis next to names
- Add photos / avatars (gatsby-plugin-image) next to names
- Add flags before before city names
- Create multiple pages for multiple teams
- Add a search / filter box to quickly find team members
- Connect a CMS and remove the local .json file
- Add a company logo to the header
- Add open graph / meta data
- Add robots.txt to hide it from Google crawlers

Built with [GatsbyJs](https://www.gatsbyjs.com/)
