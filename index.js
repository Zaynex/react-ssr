const Koa = require("koa");
const app = new Koa();
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const App = React.createElement(
  "div",
  { id: "root", style: { border: "1px solid black" } },
  React.createElement("h1", null, "Hi, lebron8"),
  React.createElement("div", null, "content"),
  React.createElement("img", {
    src:
      "https://th.bing.com/th/id/Rf0ae2a22a318e59d4643aa40d22d457d?rik=ffF1dGy%2f5Ucc3w&riu=http%3a%2f%2fsnkrpress.com%2fwp-content%2fuploads%2f2020%2f12%2fDC8380-500-4-700x500.jpg&ehk=V1IZ5QWyXgqg2k3ORYxs%2bJyCLV4Y4cFQpe7QRgUq9lw%3d&risl=&pid=ImgRaw",
  })
);

app.use(async (ctx) => {
  const element = ReactDOMServer.renderToString(App);
  ctx.body = `<html><body>${element}</body></html>`;
});

app.listen(3000);
