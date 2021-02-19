// Get form 
const form = document.querySelector('.my-form');

carburant.addEventListener('click', e => {
  const carburant = document.getElementById('carburant');
  const choix = carburant.value;
  //change type manulle or auto 
  const type = document.getElementById('type');
    if( choix == "Citadine" || choix == "Compact"  || choix == "Utilitaire" || choix == "Engin de Chantier"){
      type.innerHTML = '<option value="manulle">Manulle</option>';
    } else if ( choix == "Berline" || choix == "Camion"){
      type.innerHTML = '<option value="automatique">Automatique</option>';
    } else {
      type.innerHTML = '<option value=""></option>';
    }
    //change boite Vitesse 
    const boiteV = document.getElementById('boiteV');
    switch (choix) {
      case 'Moto':
          boiteV.innerHTML = '<option value="Electrique">Electrique +5%</option>';
          boiteV.innerHTML += '<option value="Essence">Essence +14%</option>';
          break;
      case 'Citadine':
          boiteV.innerHTML = '<option value="Electrique">Electrique +5%</option>';
          boiteV.innerHTML += '<option value="Hybride">Hybride +9%</option>';
          boiteV.innerHTML += '<option value="Essence">Essence +14%</option>';
          boiteV.innerHTML += '<option value="Diesel">Diesel +21%</option>';
          break;
      case 'Compact':
          boiteV.innerHTML = '<option value="Hybride">Hybride +9%</option>';
          boiteV.innerHTML += '<option value="Essence">Essence +14%</option>';
          boiteV.innerHTML += '<option value="Diesel">Diesel +21%</option>';
          break;
      case 'Utilitaire':
          boiteV.innerHTML = '<option value="Diesel">Diesel +21%</option>';
          break;
      case 'Berline':
          boiteV.innerHTML = '<option value="Hybride">Hybride +9%</option>';
          boiteV.innerHTML += '<option value="Essence">Essence +14%</option>';
          boiteV.innerHTML += '<option value="Diesel">Diesel +21%</option>';
          break;
      case 'Engin de Chantier':
          boiteV.innerHTML = '<option value="Essence">Essence +14%</option>';
          boiteV.innerHTML += '<option value="Diesel">Diesel +21%</option>';
          break;
      case 'Camion':
          boiteV.innerHTML = '<option value="Diesel">Diesel +21%</option>';
          break;
      default: 
      boiteV.innerHTML = ''; 
    }    
});
form.addEventListener('submit', e => {
    //refresh page none
    e.preventDefault();

    const price = document.getElementById('price');
    const carburant = document.getElementById('carburant').value;
    const boiteV = document.getElementById('boiteV').value;
    const jours = document.getElementById('jours').value;

    switch (carburant) {
        case "Moto":
          if (boiteV == "Essence") {
            total = jours * 1.14 * 10;
            break;
          }
          else {
            total = jours * 1.05 * 10;
            break;
          }
        case "Citadine":
          {
            if (boiteV == "Electrique") {
              total = jours * 1.05 * 12;
              break;
            }
            else if (boiteV == "Hybride") {
              total = jours * 1.09 * 12;
              break;
            }
            else if (boiteV == "Essence") {
              total = jours * 1.14 * 12;
              break;
            }
            else {
              total = jours * 1.21 * 12;
              break;
            }
          }

        case "Compact":
          {

            if (boiteV == "Hybride") {
              total = jours * 1.09 * 14;
              break;
            }
            else if (boiteV == "Essence") {
              total = jours * 1.14 * 14;
              break;
            }
            else {
              total = jours * 1.21 * 14;
              break;
            }
          }

        case "Berline":
          {

            if (boiteV == "Hybride") {
              total = jours * 1.28 * 20;
              break;
            }
            else if (boiteV == "Essence") {
              total = jours * 1.33 * 20;
              break;
            }
            else {
              total = jours * 1.4 * 20;
              break;
            }
          }
        case "Utilitaire":
          {

            if (boiteV == "Hybride") {
              total = jours * 1.21 * 16;
              break;
            }
          }
        case "Engin de Chantier":
          {

            if (boiteV == "Essence") {
              total = jours * 1.14 * 900;
              break;
            }
            else {
              total = jours * 1.21 * 900;
              break;
            }
          }
        case "Camion":
          {

            if (boiteV == "Hybride") {
              total = jours * 1.21 * 250;
              break;
            }
          }
        }
        price.innerHTML = `
        <h2 class="text-primary" > Le prix est : `+ total.toFixed(2) + `$</h2>` 
    ;
});
