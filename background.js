window.onload = function(){
var button = document.getElementById('proxybutton');
button.onclick = proxy();
function proxy(){
    console.log('Entered');
    var config = {
    mode: "fixed_servers",
    rules: {
    proxyForHttp: {
        scheme: "socks5",
        host: "127.0.0.1",
        port: 8910
      },
      bypassList: ["foobar.com"]
    }
  };
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
}
}