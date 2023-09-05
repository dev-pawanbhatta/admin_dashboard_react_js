const items = [
    {
        name: "Dashboard", url: '', hasMenu: true, id: 'dashboard', class: 'home',
        menu: [
            {
                name: 'Ecommerce', url: ''
            },
            {
                name: 'Analytics',
                url: ''
            },
            {
                name: 'CRM',
                url: ''
            },
        ]
    },
    {
        name: "Authentication", url: '', hasMenu: true, id: 'authentication', class: 'lock',
        menu: [
            {
                name: 'Login',
                url: ''
            },
            {
                name: 'Register',
                url: ''
            },
            {
                name: 'Forgot Password',
                url: ''
            },
        ]
    },
    {
        name: "Users", url: '', hasMenu: true, id: 'users', class: 'users',
        menu: [
            {
                name: 'User List',
                url: ''
            },
            {
                name: 'User Profile',
                url: ''
            },
            {
                name: 'My Account',
                url: ''
            },
        ],
        badge: true, badgeText: "05", badgeBgColor: "#ff0000"
    },
    {
        name: "Products", url: '', hasMenu: true, id: 'products', class: 'shopping-cart',
        menu: [
            {
                name: 'Product List',
                url: ''
            },
            {
                name: 'Product View',
                url: ''
            },
            {
                name: 'Product Upload',
                url: ''
            },
        ],
        badge: true, badgeText: "05", badgeBgColor: "#DE2FFF"
    },
    {
        name: "Invoices", url: '', hasMenu: true, id: 'invoices', class: 'copy',
        menu: [
            {
                name: 'Invoice List',
                url: ''
            },
            {
                name: 'Invoice Detail',
                url: ''
            },
        ]
    },
    {
        name: "Orders", url: '', hasMenu: false, id: 'orders', class: 'shopping-cart', badge: true, badgeText: "05"
    },
    {
        name: "Messages", url: '', hasMenu: false, id: 'messages', class: 'message', badge: true, badgeText: "05"
    },
    {
        name: "Notifications", url: '', hasMenu: false, id: 'notifications', class: 'bell', badge: true, badgeText: "05"
    },
    {
        name: "Settings", url: '', hasMenu: false, id: 'settings', class: 'gear'
    },
    {
        name: "Blank Page", url: '', hasMenu: false, id: 'blank_page', class: 'file'
    },
];

export default items