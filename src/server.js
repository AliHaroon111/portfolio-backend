import 'dotenv/config'; // Loads variables from .env instantly
import app from './app.js'; // Note: In ES Modules, you MUST include the '.js' extension!

const PORT = process.env.PORT || 5000;
console.log("Check is env working",process.env.PORT)

const server = app.listen(PORT, () => {
    console.log(`[SERVER RUNNING]: Production engine listening on port ${PORT}`);
});

// Handle unhandled asynchronous rejections globally
process.on('unhandledRejection', (err) => {
    console.error(`[CRITICAL ERROR]: ${err.message}`);
    server.close(() => process.exit(1));
});