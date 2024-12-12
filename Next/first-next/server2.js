import express from "express";
import next from "next";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      app.render(req, res, "/post", { id: req.params.id });
    });

    server.get("*", (req, res) => {
      console.log(`Handling request for: ${req.url}`);
      return handle(req, res);
    });

    // Start the server
    server.listen(port, (err) => {
      if (err) {
        console.error("Server failed to start:", err);
        process.exit(1);
      }
      console.log(`=> Now Serving on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error in app.prepare():", err);
    process.exit(1);
  });
