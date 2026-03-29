import express from "express";

export function app() {
    const PORT = process.env.PORT || 3000;
    const app = express();

    app.listen(PORT, () => {
        console.log(`API started on http http://localhost:${PORT}/`);
    });
}
