import docsHomePage from './pages/home-page';
import docsAboutPage from './pages/about-page';
import docGetStarted from './pages/get-started-page';
import docsBadges from './badges';
import docsBreadcrumbs from './breadcrumbs';
import docsButtons from './buttons';
import docsCards from './cards';
import docsChips from './chips';
import docsCollapsibles from './collapsibles';
import docsCollections from './collections';
import docsDropdowns from './dropdowns';
import docsForms from './forms';
import docsNavbars from './navbars';
import docsModals from './modals';
import docsDialogs from './dialogs';
import docsMedia from './media';
import docsTabs from './tabs';
import docPagination from './paginations';
import docsPreloaders from './preloaders';
import docsWaves from './waves';

const docsPages: [Route] = [
    {
        urls: ['/'],
        link: '/',
        title: 'Home',
        component: docsHomePage
    },
    {
        urls: ['/about'],
        link: '/about',
        title: 'About',
        component: docsAboutPage
    },
    {
        urls: ['/get-started'],
        link: '/get-started',
        title: 'Get started',
        component: docGetStarted
    },
    {
        urls: ['/badges', '/badges/:tab'],
        link: '/badges/showcase',
        title: 'Badges',
        component: docsBadges
    },
    {
        urls: ['/breadcrumbs', '/breadcrumbs/:tab'],
        link: '/breadcrumbs/showcase',
        title: 'Breadcrumbs',
        component: docsBreadcrumbs
    },
    {
        urls: ['/buttons', '/buttons/:tab'],
        link: '/buttons/showcase',
        title: 'Buttons',
        component: docsButtons
    },
    {
        urls: ['/cards', '/cards/:tab'],
        link: '/cards/showcase',
        title: 'Cards',
        component: docsCards
    },
    {
        urls: ['/chips', '/chips/:tab'],
        link: '/chips/showcase',
        title: 'Chips',
        component: docsChips
    },
    {
        urls: ['/collapsibles', '/collapsibles/:tab'],
        link: '/collapsibles/showcase',
        title: 'Collapsibles',
        component: docsCollapsibles
    },
    {
        urls: ['/collections', '/collections/:tab'],
        link: '/collections/showcase',
        title: 'Collections',
        component: docsCollections
    },
    {
        urls: ['/dialogs', '/dialogs/:tab'],
        link: '/dialogs/showcase',
        title: 'Dialogs',
        component: docsDialogs
    },
    {
        urls: ['/dropdowns', '/dropdowns/:tab'],
        link: '/dropdowns/showcase',
        title: 'Dropdowns',
        component: docsDropdowns
    },
    {
        urls: ['/forms', '/forms/:tab'],
        link: '/forms/showcase',
        title: 'Forms',
        component: docsForms
    },
    {
        urls: ['/modals', '/modals/:tab'],
        link: '/modals/showcase',
        title: 'Modals',
        component: docsModals
    },
    {
        urls: ['/media', '/media/:tab'],
        link: '/media/showcase',
        title: 'Media',
        component: docsMedia
    },
    {
        urls: ['/navbars', '/navbars/:tab'],
        link: '/navbars/showcase',
        title: 'Navbars',
        component: docsNavbars
    },
    {
        urls: ['/tabs/:tab'],
        link: '/tabs/showcase',
        title: 'Tabs',
        component: docsTabs
    },
    {
        urls: ['/pagination', '/pagination/:tab'],
        link: '/pagination/showcase',
        title: 'Pagination',
        component: docPagination
    },
    {
        urls: ['/preloaders', '/preloaders/:tab'],
        link: '/preloaders/showcase',
        title: 'Preloaders',
        component: docsPreloaders
    },
    {
        urls: ['/waves'],
        link: '/waves',
        title: 'Waves',
        component: docsWaves
    }
];

export = docsPages;