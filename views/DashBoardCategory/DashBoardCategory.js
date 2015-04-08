ResponsiveMobile.DashBoardCategory = function (params)
{
    //var data = sessionStorage.getItem("MobileDisplayName");
    function onclick(e)
    {
        viewModel.dataSource.filter(['DashboardCategory.MobileDisplayName', '=', e.itemData.MobileDisplayName], "and", ["Active", "=", true]);
        viewModel.dataSource.load();
        $('#myTileView').dxTileView('instance').option('visible', 'true');
    }
        var viewModel=
    {
        dataSource: new DevExpress.data.DataSource(
   {
       store: ResponsiveMobile.db.sampleData.DashboardDefinitions,
       sort: [{ field: "Name", desc: false }],
       select: ["Name", "Icon", "Oid", "Active"],
       expand: ["DashboardCategory"],
       //filter: [["DashboardCategory.MobileDisplayName", '=', 'Sale'], "and", ["Active", "=", true]],
   }),
        navItems: new DevExpress.data.DataSource(
            {
                store: ResponsiveMobile.db.sampleData.DashboardCategories,
                sort: [{ field: "MobileDisplayName", desc: false }],
                select: ["MobileDisplayName", "Icon16", "Oid", "IsMobile"],
                filter: ["IsMobile", '=', true]
            }),
        click: onclick,
        show: function (e) {

            ResponsiveMobile.app.navigate({ view: "DashBoardDisplay", id: { id: e.itemData.Oid, name: e.itemData.Name } });
        },
        title: sessionStorage.getItem("MobileDisplayName"),
        viewShown: function ()
        {
            $('#bg').css("background-image", "url(Images/Background.fw.png)");
            // $('#myTileView').dxTileView('instance').repaint();
            sessionStorage.removeItem("MobileDisplayName");
           
        },

        
    };    
    return viewModel;
};