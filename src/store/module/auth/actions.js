export default {
  login() {},
  async signup(context, payload) {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqm0UkyYzRA-LsLFyfDZoev7oBQJtVst4`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const resData = await res.json();

    console.log('>> resData', resData)

    if (resData.error) {
        const error = new Error(resData.message || 'Failed to auth');
        throw error;
    }

    context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpiration: resData.expiresIn
    })
  },
};
