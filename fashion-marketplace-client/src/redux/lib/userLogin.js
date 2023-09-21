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
      data;
      userData.push(data.data);
    });
  userData;
  return userData;
};

export default userLogin;
