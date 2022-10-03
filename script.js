if ("serviceworker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
    console.log("Main thread out!");
}