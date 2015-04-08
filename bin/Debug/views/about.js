ResponsiveMobile.about = function (params) {
    // var dd = '5555'
    // var store = new DevExpress.data.LocalStore(dd);
    //var dataSource = new DevExpress.data.DataSource(store);
    var viewmodel =
        {
            //click: function () {
            //    alert("http://" + sessionStorage.getItem("Ipaddress") + "/service/Dataservice.svc");
            //    //alert("Value 2 is:= " + sessionStorage.getItem("Port"));
            //}


            viewShown: function (e)
            {
                $('#about').css("background-color", "White");


            }
        }
   

    return viewmodel;
}