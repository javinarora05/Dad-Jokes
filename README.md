# 😂 Dad Jokes Generator

A simple and fun **Dad Jokes Generator** built with **HTML, CSS, and JavaScript**.  
It fetches random dad jokes from the public **icanhazdadjoke API** and displays them in a clean, modern UI.

---

## 🚀 Features

- Fetches random dad jokes from an external API
- Button to load a new joke instantly
- Dark-themed, responsive UI
- No frameworks or libraries required
- Beginner-friendly, clean codebase

---

## 🛠️ Built With

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Fetch API**

---

## 📁 Project Structure

```

.
├── index.html
├── styles.css
└── script.js

```

---

## ⚙️ How It Works

1. A joke is fetched automatically when the page loads.
2. Clicking **“Get Another Joke”** sends a request to:
```

[https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)

````
3. The API returns a JSON response.
4. The joke text is displayed on the page.

---

## 🧠 Core Logic

```js
fetch(apiUrl, {
headers: {
 Accept: "application/json"
}
})
.then(res => res.json())
.then(data => {
 apiBody.innerHTML = data.joke;
});
````

---

## ▶️ Getting Started

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Dad-Jokes.git
   ```
2. Open `index.html` in your browser.

> 💡 Tip: For best results, use VS Code’s **Live Server** extension.

---

## 📚 API Used

* **icanhazdadjoke**

  * [https://icanhazdadjoke.com/](https://icanhazdadjoke.com/)
  * Free and does not require authentication

---

## ✨ Future Improvements

* Add loading state
* Add error handling UI
* Copy joke to clipboard
* Save favorite jokes
* Convert to `async/await`

---

## 👤 Author

Built by **Javin Arora**

---
