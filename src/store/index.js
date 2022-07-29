import { createStore } from 'vuex';
import coachesModule from './module/coaches';

export default createStore({
    modules: {
        coaches: coachesModule
    }
});