ResponsiveMobile.login = function (params) {
    function login() {
        if (true) {
            var navigation = ResponsiveMobile.app.navigation;
            navigation[0].option("visible", false);
            navigation[2].option("visible", true);
            navigation[3].option("visible", true);
            navigation[4].option["visible", true];
            ResponsiveMobile.app.navigate("DashBoardCategory", { root: true })
        }

    }
    var viewModel = {
        //  Put the binding properties here
        userName: {
            value: ko.observable(""),
            valueUpdateEvent: 'keyup search',
            placeholder: "Username",
           
        },
        password: {
            value: ko.observable(""),
            mode: 'password',
            placeholder: "type a password",
            valueUpdateEvent: 'keyup search',
        },
        visible: ko.observable(false),
        viewShown: function ()
        {
            //$('#bg1').css("background-image", "url(Images/Mobile.png)");
            //sessionStorage.removeItem("usrname");
           // sessionStorage.removeItem("pwd");
            $(".userName").focus(function () {
                $(".user-icon").css("left", "-38px");
            });
            $(".userName").blur(function () {
                $(".user-icon").css("left", "0px");
            });

            $(".password").focus(function () {
                $(".pass-icon").css("left", "-38px");
            });
            $(".password").blur(function () {
                $(".pass-icon").css("left", "0px");
            });
            $("#txtusername").dxTextBox('instance').option('value', '');
            $("#tstpsw").dxTextBox('instance').option('value', '');
            $('#tstpsw').keypress(function (event) {
                if (event.keyCode == 13) {
                    $('#button').click();
                }
            });
           
        },
        hideOverlay: function ()
        {
            var overlay = $("#logonFailedoverlay").data("dxOverlay");
            overlay.hide();
            return false;
        },
        "userCredentials": function () {
            return "&UserName=" + ResponsiveMobile.app.userName() + "&Password=" + ResponsiveMobile.app.password() + "";
        },
        "IsUserAllowed": function (callbackHandler) {
            var callbackHandlerWrapper = function (data) {
                callbackHandler(data["IsUserAllowed"]);
            }
            this.ajaxRequest(null, "IsUserAllowed", callbackHandlerWrapper, "mycallback");
        },
        "CanReadMembers": function (objectType, membersName, oids, callbackHandler) { //membersName and oids is string[]
            for (var key in oids) {
                oids[key] = objectType + "(" + oids[key] + ")";
            }
        },

        login: function (e)
        {
            //var obj = "username:" + $("#txtusername").dxTextBox('option', 'value') + ";password:" + $("#tstpsw").dxTextBox('option', 'value');
            //$.ajax({
            //    Type: "get",
            //    url: 'http://localhost:1101/ResponsiveService.svc',
            //    contentType: "application/json; charset=utf-8",
            //    data:obj,
            //    async: 'true',
            //    datatype: "JSON",
            //    success: getsucess(),
            //    beforeSend: function (request) {
            //        request.setRequestHeader("UserCredentials", obj);
            //    },

            //});
            function getsucess()
            {
                if (obj == $("#txtusername").dxTextBox('option', 'value') && obj == $("#tstpsw").dxTextBox('option', 'value'))
                {
                    
                }
                else
                {
                    var overlay = $("#logonFailedoverlay").data("dxOverlay");
                       overlay.show();
                }

            }
            var usrname = $("#txtusername").dxTextBox('option', 'value');
            var pwd = $("#tstpsw").dxTextBox('option', 'value');
            sessionStorage.setItem("usrname", this.userName.value());
            sessionStorage.getItem("pwd", this.password.value());
            if (usrname != null && pwd != null)
            {
                if (usrname == 'admin' && pwd == 'admin')
                {
                    login();
                }

                else
                {
                    var overlay = $("#logonFailedoverlay").data("dxOverlay");
                     overlay.show();
                    
                }
            }

            else {

                alert("Please Enter the Username and Password!");
            }

        }
        //login form//

        //login:
        //    {
        //        text: 'login',
        //        clickAction: login_onClick

        //    },
        //login: login
    };
    return viewModel;
};