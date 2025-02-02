const searchForm = document.querySelector('#search_form');
const searchBox = document.querySelector('#search_box');
const searchresult = document.querySelector('#search_result');
const showMore = document.querySelector('#show_more');
const accKey = "VeHYe4PgXtlLardrSISV4_R6yV2B2mCdfp6eQ4Tf450";
let page = 1;
let keyword = '';

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accKey}&page=${page}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();
    if (page === 1) {
        searchresult.innerHTML = '';}
    const results = data.results;
    results.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(img);
        searchresult.appendChild(imageLink) ;
    })
    showMore.style.display = 'block';
}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
showMore.addEventListener('click', () => {
    page++;
    searchImages();
})