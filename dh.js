        function dH() {
            var submitctrl_id = 'btn_submit';
            if (var_v === false) {
                return false;
            }
            var ctrl_id = '#id_mobile';
            var mobile = $(ctrl_id).val().replace(/(^\s*)|(\s*$)/g, "");
            if ((mobile === "") || (mobile.length !== 11) || isNaN(mobile)) {
                aV("请输入11位的手机号码");
                $(ctrl_id).focus();
                return false;
            }
            var ctrl_id = '#id_password';
            var password = $(ctrl_id).val();
            if ((password.length < 6) || (password.length > 20)) {
                aV("密码必须是6-20位字符");
                $(ctrl_id).focus();
                return false;
            }
            var_v = false;
            $(submitctrl_id).html('正在登录...');
            $(submitctrl_id).prop("disabled", "disabled");
                        var url = bw('/ws/logon/in/');
                        $.ajax({
                            type: "GET",
                            data: {
                                'mobile': mobile,
                                'pwd': password
                            },
                            url: url,
                            timeout: inerfaceTimeOut * 1000,
                            dataType: "jsonp",
                            jsonp: 'callback',
                            cache: false,
                            success: function(json) {
                                if (json['errcode'] === 0) {
                                    var var_cW = parseInt(R("rms_register_starttime"));
                                    var var_y = parseInt(R("rms_register_endtime"));
                                    var var_bI = parseInt(R("rms_open_time"));
                                    var var_av = parseInt(R("rms_close_time"));
                                    var dateObj = json['data']['time'];
                                    T("rms_heatbeat_adjust", dateObj - new Date().getTime());
                                    var intervalStart = -1;
                                    var intervalEnd = 1;
                                    if (var_y !== 0) {
                                        intervalEnd = dateObj - var_y;
                                    }
                                    if (var_cW !== 0) {
                                        intervalStart = dateObj - var_cW;
                                    }
                                    jo();
                                    T("rms_mobile", mobile);
                                    T("rms_idcard", json['data']['idcard']);
                                    T("rms_name", json['data']['name']);
                                    if (((intervalStart <= 0) || (intervalEnd >= 0)) && (var_bI === 0)) {
                                        T("rms_action", "verifyview");
                                        fdd(json['data']);
                                        $(submitctrl_id).removeAttr("disabled");
                                        var_v = true;
                                        window.location.href = "register/verifymodify.html";
                                        return true;
                                    }
                                    if ((intervalEnd < 0) && (intervalStart > 0)) {
                                        T("rms_action", "verifymodify");
                                        fdd(json['data']);
                                        $(submitctrl_id).removeAttr("disabled");
                                        var_v = true;
                                        window.location.href = "register/verifymodify.html";
                                        return true;
                                    }
                                    if ((cV(dateObj, var_bI) && (intervalEnd >= 0)) || ((intervalStart >= 0) && (intervalEnd >= 0) && (dateObj <= var_bI))) {
                                        T("rms_action", "verifyview");
                                        fdd(json['data']);
                                        $(submitctrl_id).removeAttr("disabled");
                                        var_v = true;
                                        window.location.href = "register/verifymodify.html";
                                        return true;
                                    }
                                    if (ii(dateObj, var_av)) {
                                        T("rms_action", "register_over");
                                        $(submitctrl_id).removeAttr("disabled");
                                        window.location.href = "signup/register.html";
                                        return true;
                                    }
                                    T("rms_action", "register");
                                    $(submitctrl_id).removeAttr("disabled");
                                    var_v = true;
                                    window.location.href = "signup/countdown.html";
                                    return true;
                                }
                                $(submitctrl_id).html('登录');
                                bp(json['errcode'], json['errmsg']);
                                $(submitctrl_id).removeAttr("disabled");
                                var_v = true;
                                return true;
                            },
                            error: function() {
                                $(submitctrl_id).html('登录');
                                aV("网络繁忙，请稍后再试");
                                $(submitctrl_id).removeAttr("disabled");
                                var_v = true;
                            }
                        });
        };
