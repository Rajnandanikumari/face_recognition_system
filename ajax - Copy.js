function doAjax(){
    const URL = 'https://itunes.apple.com/search?term=daler+mehndi&limit=5';
    const  promise = fetch(URL);
    promise.then(response=>{
        response.json().then(data=>{
            printSongs(data.results);
        console.log('Result is ',data.results);
        }).catch(err=>{
            console.log("invalid JSON",err);
        }).catch(err=>{
            console.log('Some Server issue',err);
        })
    })

}

function printSongs(songs){
    songs.map(song=>prepareCard(song));
}
 function prepareCard(song){
      const document.createElement('div');
      div.className = 'card';
      div.style = {'width': '18rem'};
      div.appendChild(song.)
            <div class="card" style="width: 18rem;">
             <img src="..." class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">Card title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>               <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
 </div>
 }