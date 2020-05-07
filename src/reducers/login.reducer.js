const initialState = {
    userData: {},
    isFetching: false,
    isError: false
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST_BEGIN":
        return Object.assign({}, state, {
          isFetching: true,
          userData: {},
          auth:{},
          isError: false
        });
      case "LOGIN_REQUEST_POST":
        return Object.assign({}, state, {
          auth: {token:action.data.token, expires:action.data.expire},
          isFetching: false,
          isError: false
        });
      case "LOGIN_REQUEST_ERROR":
        return Object.assign({}, state, {
          isError: true,
          isFetching: false
        });
      default:
        return state;
    }
  };

export default loginReducer;