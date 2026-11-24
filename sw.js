// No private data, HTML, tokens or API responses are cached.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
 const r = event.request;
 if (r.method !== 'GET' || r.mode !== 'navigate' || new URL(r.url).origin !== self.location.origin) return;
 event.respondWith(fetch(r, {cache:'no-store'}).catch(() => new Response(`<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SPORTIME-A3</title><body style="background:#030609;color:white;font:18px system-ui;text-align:center;padding:48px 20px"><h1>SPORTIME-A3</h1><p>Se requiere conexión a Internet para validar el acceso.</p><button onclick="location.reload()">Reintentar</button></body></html>`, {status:503,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})));
});
