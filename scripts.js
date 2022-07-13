// api url
const api_url = "https://dummyjson.com/products";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
    
    console.log	(data);
    
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data){

      let container = document.getElementById('card-wrapper');
      container.innerHTML = '';
      console.log(container);
	
    for (const products of data.products){

		let card = `<div id="card_brg" class="card">
                        <img src="${products.images}">
                        <div class="card-container">
                            <p>${products.title}</p>
                            <h3>${products.price}</h3>
                        </div>
                    </div>`;
		// console.log(card);

		// let x = document.getElementById('card_brg')
		// x.innerHTML = card;



        container.append(card);
	}

  
}