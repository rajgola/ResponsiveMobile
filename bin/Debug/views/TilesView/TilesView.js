ResponsiveMobile.TilesView = function (params)
{
    var data = params.id;
    var cc = true;
    var viewModel = {
        dataSource: new DevExpress.data.DataSource(
            {
                store: ResponsiveMobile.db.sampleData.DashboardDefinitions,
                sort: [{ field: "Name", desc: false }],
                select: ["Name", "Icon","Oid","Active"],
                expand:["DashboardCategory"],
                filter: [["DashboardCategory.DisplayName", '=', data], "and", ["Active", "=", cc]],
            }),
        show: function (e)
        {
            //ResponsiveMobile.app.navigate("DashBoardDisplay/" + e.itemData.Oid);
            ResponsiveMobile.app.navigate({ view: "DashBoardDisplay", id: { id: e.itemData.Oid, name: e.itemData.Name } });
           
            //var postdata = e.itemData.Name;
            //try {
            //    $.ajax({
            //        type: "POST",
            //        url: 'http://localhost:11001/DataService.svc/',
            //        cache: false,
            //        data: postdata,
            //        dataType: "json",
            //        success: getSuccess,
            //        error: getFail
            //    });
            //} catch (e) {
            //    alert(e);
            //};
            //function getSuccess(data, textStatus, jqXHR) {
            //    alert("Id Send for server");
            //};
            //function getFail(jqXHR, textStatus, errorThrown) {
            //    alert("Oid Are not send Please Try Again");
            //};
        },
        title: ko.observable(data),
        menuItemClicked :function logout(e)
        {
            var navigation = ResponsiveMobile.app.navigation;
            navigation[0].option("visible", true);
            navigation[2].option("visible", true);
            navigation[3].option("visible", false);
            navigation[4].option("visible", true);
            ResponsiveMobile.app.navigate("login", { root: true });
           
        },

        //     toolbarItems: [
        //     {
        //         location: 'after', widget: 'dropDownMenu', options: { items: ["LogOut", "Contact"] }
        //},
        //     ],



        dropDownMenuData: [
            "LogOut",
            "Contact"
],


        viewShown:function()
        {
            $('#bg').css("background-image", "url(Images/metro_green.jpg)");
            $('#Send').dxTileView('instance').repaint();

       }
    };
   
    return viewModel;
};