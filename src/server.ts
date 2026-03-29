import { app } from "./app.js";

try {
    app();
} catch (error) {
    console.log(`API error: ${error}`);
}
