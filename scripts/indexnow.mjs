#!/usr/bin/env node
/**
 * IndexNow ping — tells Bing (which powers ChatGPT search and Copilot), Yandex and
 * other IndexNow engines that pages changed. Run after a production deploy:
 *   node scripts/indexnow.mjs            (submits every sitemap URL)
 *   node scripts/indexnow.mjs /about     (submits specific paths)
 * The key file is public/1517e60d6f164da926d1ac1477161956.txt (served at the site root).
 */
const HOST = "www.imatec.co.za";
const KEY = "1517e60d6f164da926d1ac1477161956";

const paths = process.argv.slice(2);
let urls;
if (paths.length) {
  urls = paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : "/" + p}`);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
if (res.status >= 400) process.exit(1);
