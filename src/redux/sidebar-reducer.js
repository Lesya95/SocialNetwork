let initialSate = {
    sidebar:[
        {
            id: 0,
            name: 'Profile',
            url: '/profile'
        },
        {
            id: 1,
            name: 'Users',
            url: '/users'
        },
        {
            id: 2,
            name: 'Messages',
            url: '/dialogs'
        },
        {
            id: 3,
            name: 'News',
            url: '/news'
        },
        {
            id: 4,
            name: 'Videos',
            url: '/videos'
        },
        {
            id: 5,
            name: 'Musics',
            url: '/musics'
        },
        {
            id: 6,
            name: 'Settings',
            url: '/settings'
        },
]};

const sidebarReducer = (state = initialSate, action) => {
    return state;
}

export default sidebarReducer;