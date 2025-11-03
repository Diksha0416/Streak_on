# 🕒 Streak Focus — Stay Consistent, Stay Motivated

**Streak Focus** is a simple and elegant web app built using **HTML, CSS, and JavaScript** that helps you build discipline and consistency through **daily streak tracking** and a **focus timer**.

It keeps you motivated by tracking how long you’ve stayed focused each day, showing your daily progress, and fetching motivational quotes via an API.

---

## 🚀 Features

### ⏱ Focus Timer

* Set your desired focus duration (in minutes or hours).
* Start, pause, and reset the timer with smooth animations.
* Once the timer ends, it records your focus session automatically.

### ⏳ Stopwatch Mode

* Allows you to freely measure how long you stayed focused without a predefined limit.
* Perfect for tracking unplanned deep work or study sessions.

### 🔥 Daily Streak Counter

* Tracks your **daily streaks** — how many consecutive days you’ve stayed consistent.
* If you skip a day, your streak resets to zero.
* Uses **Local Storage** so your streak data stays saved even after refreshing or closing the browser.

### 💬 Daily Motivation API

* Fetches a **new motivational quote every day** from a public API (like [ZenQuotes API](https://zenquotes.io/) or similar).
* Displays the quote at the top of the app’s dashboard to keep users inspired daily.

---

## 🧠 How It Works

1. When you open the app, it automatically checks your last streak date from **localStorage**.
2. You can set a timer or start the stopwatch to begin your focus session.
3. After the session completes, the app updates your daily streak count.
4. A motivational quote is fetched from the API to keep you inspired.

---

## 🛠 Tech Stack

* **HTML5** — Structure of the app
* **CSS3** — Styling with gradients, cards, and minimal UI
* **JavaScript (Vanilla JS)** — Core logic for timer, streaks, and API fetching

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/streak-focus.git
   ```
2. Open the folder and launch `index.html` in your browser.
3. That’s it — your streak tracking app is ready!

---

## 🌟 Future Improvements

* Add user authentication (so streaks sync across devices).
* Add notification or sound when the timer ends.
* Visual streak graphs (weekly/monthly progress).
---
