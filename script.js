console.log("script.js init");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceworker.js");
    console.log("Main thread out!");
}