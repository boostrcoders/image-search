const API_URL =
  "https://pixabay.com/api/?key=11323359-8da1b3658bbbe06ee4b89d361&image_type=photo";

export default {
  search(searchInput, page) {
    const url = `${API_URL}&q=${searchInput}&page=${page}`;

    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result;
      });
  }
};
