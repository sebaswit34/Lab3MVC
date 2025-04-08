const HOME_LINK = {
    href: "/",
    label: "Home"
};


const LOGOUT_LINKS = [
    {
        href: "/logout",
        label: "Logout from application"
    },
    {
        href: "/kill",
        label: "End session"
    }
];

const MENU_LINKS = [
    HOME_LINK,
    {
        href: "/products",
        label: "Products"
    },
];

module.exports = {
    HOME_LINK,
    LOGOUT_LINKS,
    MENU_LINKS
};
