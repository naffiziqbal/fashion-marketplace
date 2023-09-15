const userLogin = async (user) => {
  let userData = [];
  fetch("http://localhost:5000/api/v1/user/create-user", {
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
