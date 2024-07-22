const hasUpperCase = (url) => /[A-Z]/.test(url);
export const hasTrailingSlash = (url) => url.endsWith("/");
const isAgent = (url) => /^\/agents\/.+$/.test(url)

export default function (req, res, next) {
  const isStatic = req.url.includes('_nuxt');
  if (isStatic) return next();

  let redirectNeeded = false;

  let queryIndex = req.url.indexOf("?");
  let hashIndex = req.url.indexOf("#");
  let hasQuery = queryIndex > 0;
  let hasHash = hashIndex > 0;
  let url, urlEnd, lowerIndex;
  if (hasHash || hasQuery) {
    if (!hasHash && hasQuery) lowerIndex = queryIndex;
    if (hasHash && !hasQuery) lowerIndex = hashIndex;
    if (hasHash && hasQuery)
      lowerIndex = queryIndex < hashIndex ? queryIndex : hashIndex;
    url = req.url.substring(0, lowerIndex);
    urlEnd = req.url.substring(lowerIndex);
  } else url = req.url;

  if (!hasTrailingSlash(url)) {
    url = url.replace(/\/?(\?|#|$)/, "/$1");
    redirectNeeded = true;
  }
  if (hasUpperCase(url)) {
    url = url.toLowerCase();
    redirectNeeded = true;
  }
  if (isAgent(url)) {
    res.writeHead(301, {Location: '/'});
    return res.end();
  }

  if (redirectNeeded) {
    const resultUrl = url + (urlEnd ?? "");
    res.writeHead(301, {Location: resultUrl});
    return res.end();
  }

  next();
}
