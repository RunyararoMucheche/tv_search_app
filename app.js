const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
    const inputVal = form.elements.query.value;
    const config = { params: { q: inputVal } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayImg(res.data);
    form.elements.query.value = "";
  } catch (e) {
    console.log("ERROR IN SEARCH!!!", e);
  }
});

const displayImg = (shows) => {
  removeImgs();
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

const removeImgs = () => {
  const images = document.querySelectorAll("img");
  for (let image of images) {
    image.remove();
  }
};
