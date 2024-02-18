const handleUserAuthentication = (user, route) => {
  const handleUserauth = new Promise((resolved, rejected) => {
    fetch(`${import.meta.env.VITE_APP_PRODUCTION_USER_API}${route}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => resolved(data))
      .catch((err) => {
        rejected(err);
      });
  });
  return handleUserauth;
};

export default handleUserAuthentication;
