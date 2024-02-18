const imgBBHostKey = import.meta.env.VITE_APP_IMG_BB_HOST_KEY;

const handleUploadImage = (formData) => {
  const uploadImage = new Promise((resolved, rejected) => {
    fetch(`https://api.imgbb.com/1/upload?key=${imgBBHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => resolved(data))
      .catch((error) => rejected(error));
  });
  return uploadImage;
};

export default handleUploadImage;
