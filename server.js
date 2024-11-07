// Khởi động network nodejs chứ không phải file khai báo nhúng middlewares
// File này có nhiệm vụ khai báo port để khởi động server

const app = require("./src/app");

const PORT = process.env.PORT || 3055;

const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with port ${PORT}`);
});

// process.on("SIGINT", () => {
//     server.close(() => console.log(`Exit Server Express`));
//     // notify.send(ping...)
// });
