ResponsiveMobile.Setting = function (params) {
    var store = new DevExpress.data.LocalStore({
           name: "MyLocalData",
      key: "id"
    });
    function ValidateIPaddress(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(viewModel.Ipaddress.value())) {
            return (true)
        }
        alert("You have entered an invalid IP address and Port!")
        return (false)
    }
    function ipaddress()
    {
        // var obj = "Ipaddress:" + $("#Ipaddress").dxTextBox('option', 'value') + ":ServerPort:" + $("#ServerPort").dxTextBox('option', 'value');
        newURL = "http://" + this.Ipaddress.value() + "/service/DataService.svc/";
        //ValidateIPaddress(obj);
        // store.insert({ myVal: obj });
        //var data = +$("#Ipaddress").dxTextBox('option', 'value');
        $("#Ipaddress").dxTextBox('instance').option('value', '');
        $("#ServerPort").dxTextBox('instance').option('value', '');
        //Test.config.endpoints.db.local = this.Ipaddress();
        //InitOData();
        //alert(obj);
    }
var viewModel =
        {
            Ipaddress: {
                value: ko.observable(""),
                placeholder: "ServerAddress"
            },
            ServerPort:
                {
                    value: ko.observable(""),
                    placeholder: "ServerPort"
                },
            viewShown: function (e)
            {
                //$('#bg').css("background-image", "url(Images/metro_green.jpg)");
               // $('#Send').dxTileView('instance').repaint();
            },
            login:function (e)
            {
                if (this.Ipaddress.value() && this.ServerPort.value() != null) {
                    sessionStorage.setItem("Ipaddress", this.Ipaddress.value())
                    sessionStorage.setItem("ServerPort", this.ServerPort.value())
                    $("#Ipaddress").dxTextBox('instance').option('value', '');
                    $("#ServerPort").dxTextBox('instance').option('value', '');
                }
                else {
                    var overlay = $("#logonFailedoverlay").data("dxOverlay");
                    overlay.show();
                }    
            },
            hideOverlay: function ()
{
    var overlay = $("#logonFailedoverlay").data("dxOverlay");
    overlay.hide();
    return false;
},
        };
    return viewModel;
}