/* MVP service worker: required for push + offline later.
   Note: For real push, add web-push on server and show a proper UI.
*/

self.addEventListener("install", () => {
  // activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Warranty Wallet";
  const options = {
    body: data.body || "You have a reminder.",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
