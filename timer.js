var var_eff = "https://api-hxxqbm.lixueyun.cn/secwin_test";
if (window.location.host == 'xqbm.tjhxec.cn') { var_eff = "https://api-xqbm.tjhxec.cn/secwin"; }
var streetArr = ['陈塘庄街道', '大营门街道', '东海街道', '挂甲寺街道', '尖山街道', '柳林街道', '马场街道', '梅江街道', '桃园街道', '天塔街道', '下瓦房街道', '友谊路街道', '越秀路街道', '其他'];
var var_cCCCCC = 60;
var var_ci = 30;
var inerfaceTimeOut = 16;
var var_gnn = ['2013', '2014'];
var var_dVV = ['20130901', '20140831'];
var var_eyy;

function bw(method) { var var_gq = var_eff; return var_gq + method; };

function jR() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) return true;
    else return false;
};
var isIEb = function(ver) {
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1
};

function kK(option, value) { var mimeTypes = navigator.mimeTypes; for (var mt = 0; mt < mimeTypes.length; mt++) { if (mimeTypes[mt][option] == value) { return true; } } return false; };

function cL() { var var_bz = false; var var_Q = kK("type", "application/vnd.chromium.remoting-viewer"); if (jR() && !window.attachEvent) { var_bz = true; } else if (isIEb(10)) { var_bz = true; } else if (isIEb(9)) { var_bz = true; } else if (var_Q && window.MessageEvent && !window.getBoxObjectFor) { var_bz = true; } else if (window.MessageEvent) { if (document.getBoxObjectFor) { var_bz = true; } else { var_bz = true; } } var msg = '您的浏览器版本不满足报名要求，建议更换《河西区幼儿园网上报名流程》中推荐的浏览器。'; if (!var_bz) { messageBox('tip', msg, false, null, null); } };
var time = 1;
var stop;
var Alert = {
    show3sMsg: function(obj) {
        var var_bEE = '<div id="alert_dialog_show_3s_box" style=" overflow:hidden;"><div id="alert_show_3" class="time1" style="height:80px; width:280px;background-color:#da7c0c; color:#fff; opacity:0.8;border-radius:8px;font-size:15px; text-align:center;z-index: 2000; position:fixed;top: 46%;left: 0;right: 0;margin: 0 auto;"><p style="padding-top:25px;">' + obj + '</p></div></div>';
        $("body").append(var_bEE);
        time = 1;
        stop = setInterval(kQ, 3000)
    },
    showMsg: function(obj) {
        var var_bEE = '<div id="alert_dialog_show_msg_box" class="info-content" style="overflow:hidden;height:160px;width:260px;margin:auto;"><div class="sweet-overlay" tabIndex="-1" style=" background-color:rgb(102,102,102); opacity:0.4; position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index:1000;"></div><div id="alert_show_3" style="height:140px; width:240px; background-color:rgb(102,102,102); color:#fff; border-radius:8px;font-size:20px; text-align:center;z-index:2000;position:absolute;top:30%"><p style="font-size:14px; margin-top:20px;margin-left:5%;margin-right:5%">' + obj + '</p><div style="position:absolute;bottom:-20px;left:90px"><input name="button" onclick="closedShowMsg()" type="button" value="确定" class="ui-btn ui-shadow" style=" width:60px; height:30px; line-height:30px;margin-bottom:30px"  /></div></div></div>';
        $("body").append(var_bEE);
    },
    showConfirmMsg: function(obj, callback) {
        var var_bEE = '<div id="alert_dialog_show_confirm_box" style=" overflow:hidden;"><div class="sweet-overlay" tabIndex="-1" style=" background-color:#000; opacity:0.4; position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index:1000;"></div><div id="alert_show_3" style="height:80px; width:150px;background-color:#000; color:#fff; opacity:0.8; border-radius:8px;font-size:15px; text-align:center; position:fixed;top: 20%;left: 0;right: 0;margin: 0 auto;z-index:2000;"><p style="font-size:15px; margin-top:20px;">' + obj + '</p><input name="button" type="button" value="确定1" style="width:60px; height:30px;line-height:30px;" onclick="rec(' + callback + ')"/><input name="button" onclick="rec()" type="button" value="取消" style=" width:60px; height:30px;line-height:30px;"  /></div></div>';
        $("body").append(var_bEE);
        callback = callback || function() {};
    },
    loading: function() {
        var var_bEE = '<style>.spinner{margin:0 auto;width:40px;height:40px;position:relative}.container1>div,.container2>div,.container3>div{width:10px;height:10px;background-color:#53d653;border-radius:100%;position:absolute;-webkit-animation:bouncedelay 1.2s infinite ease-in-out;animation:bouncedelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .spinner-container{position:absolute;width:100%;height:100%}.container2{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.container3{-webkit-transform:rotateZ(90deg);transform:rotateZ(90deg)}.circle1{top:0;left:0}.circle2{top:0;right:0}.circle3{right:0;bottom:0}.circle4{left:0;bottom:0}.container2 .circle1{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.container3 .circle1{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}.container1 .circle2{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.container2 .circle2{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.container3 .circle2{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.container1 .circle3{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.container2 .circle3{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.container3 .circle3{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.container1 .circle4{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.container2 .circle4{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.container3 .circle4{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}</style><div id="alert_dialog_show_loading_box" style="overflow:hidden;height:40px;width:40px;margin-left:50%;margin-top:20%;"><div class="sweet-overlay" tabIndex="-1" style="background-color:#000;opacity:0.4;position:fixed;left:0;right: 0; top: 0;bottom: 0;z-index:1000;"></div><div id="alert_show_3"  style=" position:absolute;z-index:2000;"><div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div></div></div>';
        $("body").append(var_bEE);
    },
    closedLoading: function() { $("#alert_dialog_show_loading_box").remove(); }
};

function kQ() {
    $('#alert_dialog_show_3s_box').remove();
    clearInterval(stop);
};

function ks(callback) {
    $("#alert_dialog_show_confirm_box").remove();
    callback();
};

function kqq() { $("#alert_dialog_show_msg_box").remove(); };

function aV(msg, okfn) {
    var value = msg;
    if (value.length > 0) { if (value.substring(value.length - 1) !== '!') { value += '!'; } }
    messageBox('alert', value, false, okfn, null);
};

function myConfirm(msg, okfn, var_cUU) { messageBox('confirm', msg, true, okfn, var_cUU); };

function bp(errcode, errmsg) {
    var errmsgArr = [{ 'code': '1', 'msg': '参数错误', 'showmsg': '请刷新后，重新提交' }, { 'code': '410', 'msg': '拒绝访问', 'showmsg': '请在有效时间内进行操作' }, { 'code': '411', 'msg': '儿童身份证号不正确', 'showmsg': '手机号码与儿童身份证号不一致' }, { 'code': '412', 'msg': '手机号码不正确', 'showmsg': '手机号码与儿童身份证号不一致' }, { 'code': '413', 'msg': '手机验证码不正确', 'showmsg': '短信验证码错误' }, { 'code': '415', 'msg': '密码不正确', 'showmsg': '手机号码或者密码错误' }, { 'code': '416', 'msg': '此账号已登录', 'showmsg': '此手机号已登录，请先在其他机器退出登录后，再重试' }, { 'code': '417', 'msg': '需要重新登录', 'showmsg': '系统检测到您已下线，请重新登录' }, { 'code': '418', 'msg': '幼儿信息不存在', 'showmsg': '幼儿信息不存在' }, { 'code': '419', 'msg': '多机登录', 'showmsg': '系统检测到其他机器已经登录，即将为您退出' }, { 'code': '420', 'msg': '超时', 'showmsg': '系统检测到您已下线，请重新登录' }, { 'code': '421', 'msg': '报名验证码不正确', 'showmsg': '验证码错误，请重新输入' }, { 'code': '422', 'msg': '手机号已注册', 'showmsg': '该手机号码已被占用' }, { 'code': '423', 'msg': '儿童身份证号已注册，请用注册账户登录', 'showmsg': '儿童身份证号已注册，请用注册账户登录' }, { 'code': '424', 'msg': '请先获取验证码', 'showmsg': '请先获取短信验证码' }, { 'code': '425', 'msg': '系统已收到报名请求，请耐心等待', 'showmsg': '排队中，请耐心等待' }, { 'code': '426', 'msg': '手机号码未注册', 'showmsg': '手机号码未注册' }, { 'code': '427', 'msg': '报名数据不完整', 'showmsg': '您提交的数据不符合要求，请检查后重新提交' }, { 'code': '430', 'msg': '抄送信息不正确', 'showmsg': '家长承诺内容抄写不正确' }, { 'code': '510', 'msg': '发送手机验证码失败', 'showmsg': '发送短信验证码失败，请刷新后重试' }, { 'code': '511', 'msg': '数据库忙', 'showmsg': '网络繁忙，请稍后再试' }];
    var index = 0;
    for (var i = 0; i < errmsgArr.length; i++) { if (parseInt(errcode) === parseInt(errmsgArr[i]['code'])) { index = i; break; } }
    var_eyy = errcode;
    if (index >= 0) {
        messageBox('alert', errmsgArr[index]['showmsg'] + '!', true, kcc, null);
        setTimeout(kcc, 5000);
    }
};

function kcc() {
    switch (parseInt(var_eyy)) {
        case 417:
        case 420:
        case 410:
            dc();
            break;
        case 419:
            cF();
            break;
        case 510:
            ezz();
            break;
        default:
            break;
    }
};

function messageBox(type, content, overlay, okfn, var_cUU) {
    var $overlay = '';
    if (overlay) { $overlay = '<div class="overlay"></div>' }
    switch (type) {
        case 'alert':
            var $messageBox = '';
            $messageBox += '<div class="messageBox">';
            $messageBox += '<div class="messageBox_title">' + document.title + '</div>';
            $messageBox += '<div class="messageBox_content">' + content + '</div>';
            $messageBox += '<div class="messageBox_footer">';
            $messageBox += '<button type="button" class="messageBox_btn messageBox_alertyes" type="button">确定</button>';
            $messageBox += '</div>';
            $messageBox += '</div>';
            $('body').append($overlay, $messageBox);
            $('.messageBox_alertyes').unbind('click').bind('click', function() {
                $('.overlay').remove();
                $('.messageBox').remove();
                if (typeof(okfn) == 'function') { okfn(); }
            });
            break;
        case 'confirm':
            var $messageBox = '';
            $messageBox += '<div class="messageBox">';
            $messageBox += '<div class="messageBox_title">' + document.title + '</div>';
            $messageBox += '<div class="messageBox_content">' + content + '</div>';
            $messageBox += '<div class="messageBox_footer">';
            $messageBox += '<button type="button" class="messageBox_btn messageBox_confyes" type="button">确定</button><button type="button" class="messageBox_btn messageBox_confno" type="button">取消</button>';
            $messageBox += '</div>';
            $messageBox += '</div>';
            $('body').append($overlay, $messageBox);
            $('.messageBox_confyes').unbind('click').bind('click', function() {
                $('.overlay').remove();
                $('.messageBox').remove();
                if (typeof(okfn) == 'function') { okfn(); }
            });
            $('.messageBox_confno').unbind('click').bind('click', function() {
                $('.overlay').remove();
                $('.messageBox').remove();
                if (typeof(var_cUU) == 'function') { var_cUU(); }
            });
            break;
        case 'tip':
            var $messageBox = '';
            $messageBox += '<div class="tipBox">';
            $messageBox += '<div class="tipBox_content">' + content + '</div>';
            $messageBox += '</div>';
            $('body').append($overlay, $messageBox);
            break;
    }
}