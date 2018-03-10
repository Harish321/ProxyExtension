window.onload = function(){
var button = document.getElementById('proxybutton');
button.onclick = proxy(button.value);
function proxy(value){
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
  if(value == 1){
    button.value = 2;
    console.log('Changed');
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
  }
  else{
      button.value =1;
      console.log('Cleared');
    chrome.proxy.settings.clear(
        {scope: 'regular'},
        function() {});
  }
}
}