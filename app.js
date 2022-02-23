const search = document.querySelector('#search-txt');
const giphContainer = document.querySelector('#giph-container');
const removeBtn = document.querySelector('#remove-btn');

document.querySelector('#giphy-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const word = search.value;
    createGif(word);
    search.value = '';
});

removeBtn.addEventListener('click', () => giphContainer.innerHTML = '')

async function createGif(search) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: search, api_key: 'JsvF0sf3grbYiKrA4dFnSWIFWl29XQdk'}});
    const url = res.data.data[0].images.downsized_medium.url;
    const image = document.createElement('img');
    image.src = url;
    giphContainer.append(image);
};
