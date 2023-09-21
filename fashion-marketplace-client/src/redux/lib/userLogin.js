const userLogin = async (user) => {
  let userData = [];
  fetch(`${import.meta.env.VITE_APP_PRODUCTION_USER_API}/create-user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      userData.push(data.data);
    });
  console.log(userData);
  return userData;
};

export default userLogin;
