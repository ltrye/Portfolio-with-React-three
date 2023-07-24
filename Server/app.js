const express = require("express");
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const request = require("request");
var proxy = require("express-http-proxy");
//START EXPRESS
const app = express();

// // Proxy route
// app.use(
//   "/video",
//   proxy("https://onedrive.live.com", {
//     proxyReqPathResolver: (req) => {
//       return "/download?cid=6E97BF06485D6B01&resid=6E97BF06485D6B01%2155040&authkey=AKRDTrT5StZtSmo";
//     },
//     proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
//       proxyReqOpts.headers["Referer"] = "https://your-nodejs-server.com/video";
//       return proxyReqOpts;
//     },
//     changeOrigin: true, // Add this option to modify the Host header
//   })
// );

// app.get("/video", async (req, res) => {
//   const videoUrl =
//     "https://onedrive.live.com/download?cid=6E97BF06485D6B01&resid=6E97BF06485D6B01%2155040&authkey=AKRDTrT5StZtSmo"; // Replace with your OneDrive video URL
//   const range = req.headers.range;

//   try {
//     const response = await axios.get(videoUrl, {
//       headers: {
//         Range: range,
//       },
//       responseType: "stream",
//     });

//     const videoSize = response.headers["content-length"];
//     const contentRange = response.headers["content-range"];

//     if (range) {
//       res.setHeader("Content-Range", contentRange);
//       res.setHeader("Accept-Ranges", "bytes");
//       res.setHeader("Content-Length", videoSize);
//       res.setHeader("Content-Type", "video/mp4");
//       res.writeHead(206);
//       response.data.pipe(res);
//     } else {
//       res.setHeader("Content-Length", videoSize);
//       res.setHeader("Content-Type", "video/mp4");
//       res.writeHead(200);
//       response.data.pipe(res);
//     }
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.get("/video", (req, res) => {
//   const videoUrl =
//     "https://onedrive.live.com/download?cid=6E97BF06485D6B01&resid=6E97BF06485D6B01%2155040&authkey=AKRDTrT5StZtSmo"; // Replace with your OneDrive video URL
//   //Write head
//   const headers = {
//     "Content-Type": "video/mp4",
//     "Content-Disposition": 'attachment; filename="video.mp4"', // Set a custom filename if needed
//     // "X-Accel-Redirect": videoUrl, // Set the desired source URL
//   };

//   res.writeHead(200, headers);
//   // Proxy the video request to OneDrive
//   req.pipe(request(videoUrl)).pipe(res);
// });
// app.use(
//   "/video",
//   proxy(
//     "https://onedrive.live.com/download?cid=6E97BF06485D6B01&resid=6E97BF06485D6B01%2155040&authkey=AKRDTrT5StZtSmo/",
//     {
//       preserveHostHdr: true,
//     }
//   )
// );
//MIDDLEWARE STATIC FILE
app.use(express.static(path.resolve(__dirname, "../dist")));

app.route("/").get((req, res) => {
  console.log(path.join(__dirname, "index.html"));
  res.sendFile(path.resolve("index.html"));
});

app.route("/home").get((req, res) => {});

app.route("/trye").get((req, res) => {
  // res.redirect("http://localhost:5000/video");
  let url;
});
// app.route("/video").get((req, res) => {
//   res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
//   res.setHeader("Content-Type", "video/mp4");

//   // Redirect the client to the download URL
//   res.redirect(
//     "https://onedrive.live.com/download?cid=6E97BF06485D6B01&resid=6E97BF06485D6B01%2155040&authkey=AKRDTrT5StZtSmo"
//   );
// });
module.exports = app;
