// Reference the serviceWorker.
const serviceWorker = navigator.serviceWorker;

// Register our ServiceWorker script, if serviceWorker is available.
if (serviceWorker) {
    serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("ServiceWorker Registered to the Application!"))
        .catch(() => console.log("Failed to Register the ServiceWorker."));
}