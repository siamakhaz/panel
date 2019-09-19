import jsonwebtoken from 'jsonwebtoken'

const jwt = jsonwebtoken;


export default function auth({next, router}) {
  if (localStorage.token) {
    let decoded = jwt.decode(localStorage.token);
    if (decoded) {
      let currentDate = Date.now();
      currentDate = currentDate.toString();
      currentDate = currentDate.slice(0, -3);
      currentDate = parseInt(currentDate);
      if (currentDate > decoded.exp) {
        logout(router)
      }
    } else {
      logout(router)
    }

  }
  if (!localStorage.token || !localStorage.refreshToken) {
    return router.push({name: 'Login'});
  }
  return next();
}

function logout(router) {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  return router.push({name: 'Login'});
}
