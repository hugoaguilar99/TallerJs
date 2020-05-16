
const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const id = search_params.get('id');

const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=b75b1d0a62090c1041d02f181bbb64a3&hash=abc54d4c699ad071461a735676f229bc`
const detalle = fetch(url)
  .then(response => response.json().then(result => {
      let data = result.data.results[0];

      document.getElementById('title').innerHTML = data.name;

      let card = charToCard(data)

      document.getElementById('card').innerHTML = card;

      let comics = '';
      data.comics.items.forEach(comic => {
          comics = comics.concat(`<li class="list-group-item">${comic.name}</li>`);
      })

      document.getElementById('comics').innerHTML = comics;

  }))

  function charToCard(char) {
    let modified = new Date(char.modified);
    let now = new Date();
    let diff = (now - modified)/(1000*60*60*24);
    let timeTag = Math.floor(diff) > 1 ? 'days' : 'day';
    if(diff > 30){
        diff /= 30;
        timeTag = Math.floor(diff) > 1 ? 'months' : 'month';;
        if(diff > 12) {
            diff /= 12;
            timeTag = Math.floor(diff) > 1 ? 'years' : 'year';;
        }
    }
    diff = Math.floor(diff);

    return `<div class="card" style="width: 18rem;">
      <img src="${char.thumbnail.path}.${char.thumbnail.extension}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${char.name}</h5>
        <p class="card-text" style="text-align: justify;">${char.description || 'No description available'}</p>
        <span style="font-size: x-small;">Character Id: ${char.id}</span>
      </div>
      <div class="card-footer text-muted">Modified: ${diff} ${timeTag} ago</div>
    </div>`;
  }

  function goBack() {
      location.href = `index.html`;
  }
