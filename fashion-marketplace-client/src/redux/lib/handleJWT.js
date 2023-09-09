const handleJWT = async (email, password) => {
  try {
    fetch("http://localhost:5000/api/v1/user/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", data.token);
      });
  } catch (err) {
    alert(err.message);
  }
};

export default handleJWT;
