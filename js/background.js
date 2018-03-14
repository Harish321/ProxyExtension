window.onload = function(){
            chrome.storage.sync.get('value',function (texts){
                if(!texts!=null){
                var checkbox = document.getElementById('checkbox');
                console.log(texts.value);
                if(texts.value=="on"){
                    document.getElementById("checkbox").checked = true;
                }
                else{
                    document.getElementById("checkbox").checked = false;
                }
                }
            })
}

var checkbox = document.getElementById('checkbox');
checkbox.onclick = function(){
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
  if(checkbox.checked){
      console.log('Checked');
    chrome.storage.sync.set({'value':"on"},function(){});
    chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {});
  }
  else {
      console.log('unchecked');
      chrome.storage.sync.set({'value':"off"},function(){});
    chrome.proxy.settings.clear(
        {scope: 'regular'},
        function() {});
  }
}