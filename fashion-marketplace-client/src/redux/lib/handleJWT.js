const handleJWT = async (email, password) => {
  try {
    fetch(`${import.meta.env.VITE_APP_LOCALHOST_USER_API}/jwt`, {
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
