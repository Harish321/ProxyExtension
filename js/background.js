window.onload = function(){
    chrome.storage.sync.get('value',function(results){
        if(results!=null){
            chrome.storage.sync.get('text',function (texts){
                if(!texts!=null){
                var button = document.getElementById('proxybutton');
                button.textContent = texts.text;
                if(texts.text=="On"){
                    document.getElementById('main_body').style.backgroundColor="green";
                }
                else{
                    document.getElementById('main_body').style.backgroundColor="red";
                }
                }
            })
            button.value = results.value;
        }
    })
}

var button = document.getElementById('proxybutton');
var body = document.getElementById('main_body');
button.onclick = function(){
    var config = {
    mode: "fixed_servers",
    rules: {
        singleProxy: {
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
    body.style.backgroundColor = "red";
    chrome.storage.sync.set({'value':2,'text':"Off"},function(){});
    chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});
  }
  else{
      button.value = 1;
      button.textContent = "On";
      body.style.backgroundColor= "green";
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