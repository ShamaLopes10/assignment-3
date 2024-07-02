// src/Auth.js
export const httpClient = () => {
    const { token } = JSON.parse(localStorage.getItem('auth')) || {};
    return { Authorization: `Bearer ${token}` };
  };
  
  export const authProvider = {
    // authentication
    login: ({ username, password }) => {
      const request = new Request(
        'https://localhost:3000',
        {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
        }
      );
      return fetch(request)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('auth', JSON.stringify({ token: data.token }));
          return data;
        });
    },
  
    // logout
    logout: () => {
      localStorage.removeItem('auth');
    },
  
    // check if user is authenticated
    checkAuth: () => {
      const token = localStorage.getItem('auth');
      if (token) {
        return true;
      }
      return false;
    },
  
    // get user role
    getRole: () => {
      const token = localStorage.getItem('auth');
      if (token) {
        return token.role;
      }
      return null;
    },
  };