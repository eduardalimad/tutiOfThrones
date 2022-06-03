async function renderCharacters() {
  const response = await axios.get('https://thronesapi.com/api/v2/Characters');

  if (response.status === 200) {
    const characters = response.data;
    var html = "";
    characters.map((element, index) => {
      html += `
      <div class="characters">
        <a href="character.html?id=${element.id}">
          <img class="characters" src="${element.imageUrl}"
            alt="${element.fullName}">
          <div class="subtitle">
            ${element.fullName}
          </div>
        </a>
      </div>
      `;
    })

    const Container = document.querySelector('main');
    Container.innerHTML = html;
  }
}

async function renderCharactersById(id) {
  const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`);

  if (response.status === 200) {
    const CharactersInfo = response.data;

    document.getElementById('imgChange').innerHTML = `<img src="${CharactersInfo.imageUrl}" alt="${CharactersInfo.fullName}">`;

    document.getElementById('firstNameText').innerHTML = CharactersInfo.firstName;
    document.getElementById('lastNameText').innerHTML = CharactersInfo.lastName;
    document.getElementById('fullNameText').innerHTML = CharactersInfo.fullName;
    document.getElementById('titleText').innerHTML = CharactersInfo.title;
    document.getElementById('familyText').innerHTML = CharactersInfo.family;
  }
}

function captureGetInfo() {
  var query = location.search.slice(1);
  var partes = query.split('&');
  var data = {};
  partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
  });

  return data;
}