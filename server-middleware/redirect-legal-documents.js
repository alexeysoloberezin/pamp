export default function (req, res, next) {
  // req is the Node.js http request object
  if (req.url.includes("documents/")) {
    let part = req.url.split("documents/")[1];
    const url =
      {
        oferta:
          "https://drive.google.com/file/d/1WU8_9KGYem9OS3mPoHbb3S2PmnkMEC5g/view",
        ofertaJur:
          "https://docs.google.com/document/d/1dI9Xr47Wg6SDR9D-oMm1uV1VvuVxtgmeQo1XLEo2dgM/view",
        "privacy-policy":
          "https://drive.google.com/file/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/view",
        agreement:
          "https://drive.google.com/file/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/view",
      }[part] ?? "/";
    res.writeHead(302, { Location: url });
    res.end();
  } else next();
}
