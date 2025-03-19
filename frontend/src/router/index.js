import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import Login from '../components/Login.vue';
import Upload from '../components/Upload.vue';
// import Dashboard from '../components/Dashboard.vue';
import Notices from '../components/Notices.vue';
import AboutUs from '../views/AboutUs.vue';
import ContactUs from '../views/ContactUs.vue';
import Nirf from '../views/Nirf.vue';
import CommitteeMembers from '../views/Committee-members.vue';
import Gallery from '../views/Gallery.vue';
import MomUpload from '../components/MomUpload.vue';
import MomReports from '../components/MomReports.vue';

const routes = [
    { path: '/', name: 'Welcome', component: Welcome },
    { path: '/login', name: 'Login', component: Login },
    { path: '/upload', name: 'Upload', component: Upload, meta: { requiresAuth: true } },
    // { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/notices', name: 'Notices', component: Notices },
    { path: '/about-us', name: 'AboutUs', component: AboutUs },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },
    { path: '/notices', name: 'Notices', component: Notices },
    { path: '/Nirf', name: 'Nirf', component: Nirf },
    { path: '/CommitteeMembers', name: 'CommitteeMembers', component: CommitteeMembers },
    { path: '/Gallery', name: 'Gallery', component: Gallery },
    { path: '/m-o-m', name: 'minutes-of-meeting', component: MomUpload, meta: { requiresAuth: true } },
    { path: '/mom-reports', name: 'mom-reports', component: MomReports}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = sessionStorage.getItem('userToken');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;
