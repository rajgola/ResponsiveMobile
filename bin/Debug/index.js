window.ResponsiveMobile = window.ResponsiveMobile || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Howto/Themes article

    document.addEventListener("deviceready", onDeviceReady, false);

    function logout() {
        var navigation = ResponsiveMobile.app.navigation;
        navigation[0].option("visible", true);
        navigation[2].option("visible", true);
        navigation[3].option("visible", false);
        navigation[4].option("visible", true);
        ResponsiveMobile.app.navigate("login", { root: true });
    }

    function onDeviceReady() {
        navigator["splashscreen"].hide();
        if (window.devextremeaddon != null) {
            window.devextremeaddon.setup();
        }
        document.addEventListener("backbutton", onBackButton, false);
    }

    function onBackButton() {
        DevExpress.processHardwareBackButton();
    }

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !ResponsiveMobile.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "tizen":
                window["tizen"].application.getCurrentApplication().exit();
                break;
            case "android":
                navigator["app"].exitApp();
                break;
            case "win8":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }
    //DevExpress.devices.current({
    //    platform:  'generic',
    //    deviceType: 'phone' | 'tablet'
    //});

    ResponsiveMobile.app = new DevExpress.framework.html.HtmlApplication({
        namespace: ResponsiveMobile,
        layoutSet: DevExpress.framework.html.layoutSets['slideout'],
        navigation: ResponsiveMobile.config.navigation,
        commandMapping: ResponsiveMobile.config.commandMapping,
        navigation: [
                {
                    title: "Login",
                    onExecute: "#login",
                    icon: "key",
                    visible: ko.observable(true)
                },
                {
                    title: "About",
                    onExecute: "#about",
                    icon: "info",
                    visible: ko.observable(true)
                },
                 {
                     title: "Contact",
                     onExecute: "#contact",
                     icon: "card",
                     visible: ko.observable(true)
                 },
                   {
                       title: "Logout",
                       onExecute: logout,
                       icon: "runner",
                       visible: ko.observable(false)
                   },
                 {
                     title: "Setting",
                     action: "#Setting",
                     icon: "preferences"
                 }
                 //{
                 //    title: "DashBoardCategory",
                 //    onExecute: "#DashBoardCategory",
                 //    icon: "home",
                 //    visible: ko.observable(false)
                 //},
               
        ],
    });
    ResponsiveMobile.app.router.register(":view/:id", { view: "login", id: undefined });
    ResponsiveMobile.app.on("navigatingBack", onNavigatingBack);
    ResponsiveMobile.app.navigate();
});
