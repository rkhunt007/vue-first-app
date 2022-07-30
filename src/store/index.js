import { createStore } from 'vuex';
import coachesModule from './module/coaches';
import requestsModule from './module/requests';

export default createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters:{
        userId(state) {
            return state.userId;
        }
    }
});