import jwt_decode from "jwt-decode";

export default {
  getUserToken(){
    let user = JSON.parse(localStorage.get('user'));
    let decodedToken = user ? jwt_decode(user.token) : null;
    if(!deceodedToken || decodedToken.exp < Date.now()){
      window.location = "http://localhost:8080/#/";
      localStorage.clear();
      return null;
    } else {
      return decodedToken;
    }
  }
}



// class checkToken {
//   created(){
//     let decodedToken = getDecodedToken();
//     console.log(decodedToken.exp);
//     console.log(Date.now());
//     if (decodedToken.exp > Date.now()) {
//       window.location = "http://localhost:8080/#/";
//     }
//   }
// };

// function getDecodedToken() {
//   let token = getTokenFromLocalStorage();
//   return jwt_decode(token);
// }

// function getTokenFromLocalStorage() {
//   let user_json = localStorage.getItem("user");
//   let user = JSON.parse(user_json);
//   let userToken = user.token;
//   console.log(userToken);

//   return userToken;
// }

