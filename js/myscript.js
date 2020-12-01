// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
//
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue. Concentratevi sulla parte JS, per la grafica avete come ref lo screeshot, ma i dettagli lasciateli per la fine.
//
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

const dischi = 'https://flynn.boolean.careers/exercises/api/array/music';
const email = 'https://flynn.boolean.careers/exercises/api/random/mail';

var app = new Vue({
  el: '#app',
  data: {
    album: []
  },
  mounted: function () {
    // for (i=0; i<10; i++) {
    axios.get(dischi) //fai partire questa richiesta col metodo get a questa url
    .then((response) => { //se la richiesta va a buon fine allora esegui
    const title = response.data.response[0].title;
    const author = response.data.response[0].author;
    this.album.push(title, author);
    });
    // }
  }
});
