export default {
    async registerCoach(context, payload) {
        const userId = context.rootGetters.userId;

        const res = await fetch(`https://vue-http-requests-a120f-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });

        // const responseData = await res.json();

        if (!res.ok) {
            // error ...
        }

        context.commit('registerCoach', {
            ...payload,
            id: userId
        });
    },
    async fetchCoaches(context) {

        const res = await fetch(`https://vue-http-requests-a120f-default-rtdb.firebaseio.com/coaches.json`);

        const responseData = await res.json();

        if (!res.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];
        for (const key in responseData) {
            coaches.push({
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                hourlyRate: responseData[key].hourlyRate,
                description: responseData[key].description,
                areas: responseData[key].areas,
            });
        }

        context.commit('setCoaches', coaches);
    }
};