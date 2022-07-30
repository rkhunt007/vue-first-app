export default {
    async addRequest(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        }

        const res = await fetch(`https://vue-http-requests-a120f-default-rtdb.firebaseio.com/requests/${payload.id}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await res.json();

        if (!res.ok) {
            const error = new Error(responseData.message || 'Failed to send request!');
            throw error;
        }

        context.commit('addRequest', {
            ...newRequest,
            id: responseData.name,
            coachId: payload.id,
        });

    },
    async fetchRequests(context) {

        const userId = context.rootGetters.userId;

        const res = await fetch(`https://vue-http-requests-a120f-default-rtdb.firebaseio.com/requests/${userId}.json`);

        const responseData = await res.json();

        if (!res.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests!');
            throw error;
        }

        const requests = [];
        for (const key in responseData) {
            requests.push({
                id: key,
                message: responseData[key].message,
                userEmail: responseData[key].userEmail,
                coachId: userId,
            });
        }

        context.commit('setRequests', requests);
    }
};