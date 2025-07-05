// ✅ Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log("✅ Service Worker enregistré !"))
      .catch(err => console.error("❌ Erreur SW:", err));
  });
}

// ✅ Masquer le loader au chargement
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});