const shoesDOM = document.querySelector('.shoes')
const loadingDOM = document.querySelector('.load-shoe')
const formDOM = document.querySelector('.Shoe-Form')
const shoeInputDOM = document.querySelector('.shoe-Input')
const shoeAlertDOM = document.querySelector('.Shoe-alert')
// load task from api / tasks
const showShoes = async () => {
    loadingDOM.style.visibility = 'visible';
    try {
        const { data: { shoe }, } = await axios.get('/api/v1/shoes');
        console.log(shoe)
        if (shoe.length < 1) {
            shoesDOM.innerHTML = '<h5 class="empty">No tasks in your list</h5>'
            loadingDOM.style.visibility = 'hidden'
            return;
        }
        const allShoes = shoe.map((shoes) => {
            const {Shoe,Brand,Rating,Type,Price,Stock, _id: shoeID } = shoes;
            return `
            <div class="Shoes">
            <h1 class="brand">${Brand}</h1>
            <p class="item">${Shoe}</p>
            <p class="item">${Rating}</p>
            <p class="item">${Type}</p>
            <p class="item">${Price}</p>
            <p class="item">${Stock}</p>
            <a href="edit.html?id=${shoeID}" class="edit-link">
                <i class="fas fa-edit"></i>
            </a>
            <button type="button" class="delete-btn" data-id="${shoeID}">
                <i class="fas fa-trash"></i>
            </button>
            </div>
            `
        }).join("");
        shoesDOM.innerHTML = allShoes;
    } catch (error) {
        shoesDOM.innerHTML = "<h5 class='empty'>There was an error, please try again later</h5>"
        console.log(error)
    }
    loadingDOM.style.visibility = 'hidden'
}
showShoes()

//Delete task /api/task/:id
shoesDOM.addEventListener('click',async(e)=>{
    const el = e.target;
    //delete Button
    if(el.parentElement.classList.contains('delete-btn')){
        loadingDOM.style.visibility = 'visible'
        const id = el.parentElement.dataset.id
    
    try{
        await axios.delete(`/api/v1/shoes/${id}`)
        showShoes();
    }catch(error){
        console.log(error)
    }
}
    loadingDOM.style.visibility = 'hidden'
})

// //form
// formDOM.addEventListener('submit',async(e)=>{
//     e.preventDefault();
//     try{
//         const newShoe = {
//             "Brand": brandNameDOM.value,
//         }
//         await axios.post('/api/v1/shoes',{newShoe})
//         showShoes();
//         shoeInputDOM.value = ''
//         shoeAlertDOM.style.display = 'block'
//         shoeAlertDOM.textContent = 'success, Shoe added'
//         shoeAlertDOM.classList.add("text-success")
//     }catch(error){
//         shoeAlertDOM.style.display='block'
//         shoeAlertDOM.innerHTML='Error please try again'
//     }
//     setTimeout(()=>{
//         shoeAlertDOM.style.display = 'block'
//         shoeAlertDOM.classList.remove('text-success')
//     },3000)
// })