require("dotenv").config(); // Завантаження даних з .env

const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.options("*", cors());

// Налаштування middleware для обробки JSON та URL-кодованих даних
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ендпоінт для обробки форми
app.post("/send-email", async (req, res) => {
  // Отримання даних з тіла запиту
  const { name, phone, email, message } = req.body;

  // Формування тексту листа
  const emailContent = `
Користувача звати: ${name}
Повідомлення: ${message}
Номер телефону: ${phone}
${email ? `Пошта: ${email}` : ""}
  `;

  try {
    // Налаштування транспортеру для роботи з Gmail
    let transporter = nodemailer.createTransport({
      // host: "smtp-mail.outlook.com",
      // port: 587,
      // secure: false, // Якщо порт 465 - тоді secure: true
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ваш Gmail аккаунт
        pass: process.env.EMAIL_PASS, // Ваш пароль або app password
      },
    });

    // Опції листа
    let mailOptions = {
      from: process.env.EMAIL_USER, // Від кого надсилається лист
      to: "uniprint.lviv@gmail.com", // Куди надсилати лист
      subject: "Нове повідомлення з сайту",
      text: emailContent, // Текст листа
    };

    // Відправка листа
    let info = await transporter.sendMail(mailOptions);
    console.log("Лист відправлено: " + info.response);
    res.json({ message: "Лист успішно відправлено!" });
  } catch (error) {
    console.error("Помилка при відправленні листа:", error);
    res
      .status(500)
      .json({ message: "Сталася помилка при відправленні листа." });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});
