window.onload = function(){
    chrome.storage.sync.get('value',function(results){
        if(results!=null){
            chrome.storage.sync.get('text',function (texts){
                if(!texts!=null){
                var button = document.getElementById('proxybutton');
                button.textContent = texts.text;
                }
            })
            button.value = results.value;
        }
    })
}

var button = document.getElementById('proxybutton');

button.onclick = function(){
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
  if(button.value == 1){
    button.value =2;
    button.textContent = "Off";
    chrome.storage.sync.set({'value':2,'text':"Off"},function(){});
  chrome.proxy.settings.set(
      {value: config, scope: 'regular'},
      function() {});
  }
  else{
      button.value = 1;
      button.textContent = "On";
      chrome.storage.sync.set({'value':1,'text':"On"},function(){});
    chrome.proxy.settings.clear(
        {scope: 'regular'},
        function() {});
  }
}
function change(){
    button.textContent = "Off";
    button.value =2;
}