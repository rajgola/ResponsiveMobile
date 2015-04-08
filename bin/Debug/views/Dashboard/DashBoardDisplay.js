ResponsiveMobile.DashBoardDisplay = function (params)
{
    var filter = params.id.id;
    var name = params.id.name;
    var viewModel =
        {
            viewShown: function (e)
            {
                 $("#blockrandom").attr('src', "http://brcompany.cevious.net/login/DashBoard/DashBoardDesigner.aspx?Oid=" + filter + "");
            },
            title: ko.observable(name),
            menuItemClicked: function logout(e) {
                var navigation = ResponsiveMobile.app.navigation;
                navigation[0].option("visible", true);
                navigation[2].option("visible", true);
                navigation[3].option("visible", false);
                navigation[4].option("visible", true);
                ResponsiveMobile.app.navigate("login", { root: true });
                //ResponsiveMobile.app.navigate("contact", { root: true });

            },
            //     toolbarItems: [
            //     {
            //         location: 'after', widget: 'dropDownMenu', options: { items: ["LogOut", "Contact"] }
            //},
            //     ],
    
            dropDownMenuData:
                [
        "LogOut",
    ]
            
            
        };
   
    
    return viewModel;
};