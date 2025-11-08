# 🔐 Random Password Generator

A simple and stylish **Password Generator** built with **HTML, CSS, and JavaScript**.  
It allows users to generate two random secure passwords instantly with one click.


## 🧩 Features

- Generates two random passwords at once  
- Includes uppercase, lowercase, numbers, and special symbols  
- Responsive and modern dark UI design  
- Hover effects and interactive button  
- Fast and lightweight — runs entirely in the browser  

## 🛠️ Built With

- **HTML5** — structure and layout  
- **CSS3** — modern styling and design  
- **JavaScript (ES6)** — logic for generating random passwords  


## 📂 Project Structure

password-generator/
│
├── index.html # Main HTML file
├── index.css # Styling
└── index.js # JavaScript logic

---

## 🧠 How It Works

1. Click the **"Generate Password"** button.  
2. JavaScript selects random characters from an array of letters, numbers, and symbols.  
3. Two passwords are displayed in separate boxes.  

---

## ⚡ Example Code Snippet

```js
function getRandomChar() {
  let randomNumber = Math.floor(Math.random() * characters.length)
  return characters[randomNumber]
}
```


![Alt text](./screenshots/screenshot_a.jpeg)
![Alt text](./screenshots/screenshot_b.jpeg)

---

As it is an open source you can download it and make changes for yourself.
Enjoy coding!
