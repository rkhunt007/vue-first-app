import { createStore } from 'vuex';
import coachesModule from './module/coaches';
import requestsModule from './module/requests';
import authModule from './module/auth';

export default createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule,
        auth: authModule
    },
});