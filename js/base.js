    try{
        var path = window.location.host;
        var str = path.substring(path.lastIndexOf('com')+3,path.lastIndexOf('com')+7)
        if(str.indexOf(':80/') != -1 || str.indexOf(':') === -1){
            //正式
            var base = {
                hosturl:"http://aetosgo.com:80/anygo/",
                type: 1
            }
        }else {
            //测试
            var base = {
                hosturl:"http://aetosgo.com:8080/anygo/",
                type: 0
            }
        }
    }catch(e){
        // alert(e)
    }

    /**
     * openToast弹窗时间
     * text弹窗内容
     * time弹窗时间
     * type为1时有loading动画；为0时没有
     **/
    function openToast(text,type,time){
        var str = '';
        if(type == 0){
            str += ' <div class="toast">'
                +'     <span class="toast-txt">'+text+'</span>'
                +'   </div>'
            $("body").append(str);
            setTimeout(function(){
                $('.toast').remove();
            },time);
        }else if(type == 1){
            str += ' <div class="toast">'
                +'      <img src="images/load.gif" alt="">'
                +'      <span class="toast-txt">'+text+'</span>'
                +'   </div>'
            $("body").append(str);
        }
    }
    //关闭toast弹窗
    function closeToast(){
        $('.toast').remove();
    }
    //判断ios or android
    function isIos(){
        let u = navigator.userAgent, app = navigator.appVersion;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            return 1
        }
        if (isIOS) {
    　　　　//这个是ios操作系统
            return 0
        }
    }
    //ios申明交互
    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }