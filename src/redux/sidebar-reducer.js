let initialSate = {
    sidebar:[
        {
            name: 'Profile',
            url: '/profile'
        },
        {
            name: 'Users',
            url: '/users'
        },
        {
            name: 'Messages',
            url: '/dialogs'
        },
        {
            name: 'News',
            url: '/news'
        },
        {
            name: 'Videos',
            url: '/videos'
        },
        {
            name: 'Musics',
            url: '/musics'
        },
        {
            name: 'Settings',
            url: '/settings'
        },
]};

const sidebarReducer = (state = initialSate, action) => {
    return state;
}

export default sidebarReducer;