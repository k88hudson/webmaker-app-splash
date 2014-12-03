var manifestUrl = 'https://webmaker-app.mofostaging.net/manifest.webapp';

var installBtn = document.getElementById('install-app');
var tryBtn = document.getElementById('try-app');

if (navigator.mozApps) {
    tryBtn.style.display = 'none';
    function install(e) {
        e.preventDefault();
        var installLocFind = navigator.mozApps.install(manifestUrl);
        installLocFind.onsuccess = function (data) {
            installBtn.style.display = 'none';
        };
        installLocFind.onerror = function () {
            alert('Sorry, we could not install this app: ' +
                installLocFind.error.name);
        };
    };
    installBtn.addEventListener('click', install, false);

    var installCheck = navigator.mozApps.checkInstalled(manifestUrl);
    installCheck.onsuccess = function () {
       if (installCheck.result) {
        installBtn.style.display = 'none';
       } else {
        installBtn.style.display = '';
       }
    };
} else {
    installBtn.style.display = 'none';
}
