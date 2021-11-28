import Trending from '../pages/Trending/Trending';
import Series from '../pages/Series/Series';
import Search from '../pages/Search/Search';
import Movies from '../pages/Movies/Movies';
import Watch from '../pages/Watch/Watch';
import CastList from '../pages/CastList/CastList';
import Actor from '../pages/Actor/Actor'; 
import Collection from '../pages/Collection/Collection';

export const ROUTES = [
    {
        id: 0,
        exact: true,
        path: '/',
        component: () => <Trending name={'TRENDING TODAY'} />
    },
    {
        id: 1,
        path: '/movies',
        component: () => <Movies name={'DISCOVER MOVIES'} />
    },
    {
        id: 2,
        path: '/series',
        component: () => <Series name={'DISCOVER SERIES'} />
    },
    {
        id: 3,
        path: '/search',
        component: () => <Search name={'SEARCH MOVIES'} />
    },
    {
        id: 4,
        path: '/watch/:type/:id/cast-list',
        component: ({match}) => <CastList name={'CAST LIST'} match={match} />
    },
    
    {
        id: 5,
        path: '/watch/:type/:id',
        component: ({ match }) => <Watch name={'WATCH'} match={match} />
    },
    {
        id: 6,
        path: '/actor/:id',
        component: ({ match }) => <Actor name={'ACTOR INFO'} match={match} />
    },
    {
        id: 7,
        path: '/collection',
        component: () => <Collection name={'MY COLLECTION'} />
    },
    
];
