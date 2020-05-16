const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b75b1d0a62090c1041d02f181bbb64a3&hash=abc54d4c699ad071461a735676f229bc`
const detalle = fetch(url)
  .then(response => response.json().then(chars => {
    let items = '';
    chars.data.results.forEach(character => {
      let id = character.id;
      let name = character.name;
      let description = character.description;

      let item = charToListItem({
        id: character.id,
        name:  character.name,
        description: character.description,
      })

      items = items.concat(item)

    })

    const listaHtml = document.getElementById('lista');
    listaHtml.innerHTML = items;
  }))

  function charToListItem(char) {
    return `<a class="container-fluid list-group-item list-group-item-action character-list-item rounded-md" href="detalle.html?id=${char.id}">
        <div class="row align-items-center">
            <div class="col" style="margin-left: 16px;">
                <div class="row">
                    <h4>${char.name || 'no name available'}</h4>
                </div>
                <div class="row">
                    <small>${char.description || 'No description available'}</small>
                </div>
                <div class="row" style="margin-top: 12px;">
                    <small>Id: ${char.id}</small>
                </div>
            </div>
        </div>
    </div>`;
  }
