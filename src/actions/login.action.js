export const initiate_login = () => {
    return {
      type: "LOGIN_REQUEST_BEGIN"
    };
  };
  
  export const login_post = post => {
    return {
      type: "LOGIN_REQUEST_POST",
      data: post
    };
  };
  
  export const login_error = () => {
    return {
      type: "LOGIN_REQUEST_ERROR"
    };
  };