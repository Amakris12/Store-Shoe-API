const shoeIdDOM = document.querySelector('.task-edit-id')
const brandNameDOM = document.querySelector('.Brand-edit-name')
const shoeNameDOM = document.querySelector('.Shoe-edit-name')
const ratingNameDOM = document.querySelector('.Rating-edit-name')
const typeNameDOM = document.querySelector('.Type-edit-name')
const priceNameDOM = document.querySelector('.Price-edit-name')
const stockNameDOM = document.querySelector('.Stock-edit-name')
// const shoeCompleteDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName;

const showShoe = async ()=>{
    try{
        console.log(id)
        const { data: {shoe},} = await axios.get(`/api/v1/shoes/${id}`)
        console.log(shoe)
        const { _id: shoeID,completed,name,Brand,Shoe,Rating,Type,Price} = shoe;
        shoeIdDOM.textContent = shoeID
        brandNameDOM.value = Brand;
        shoeNameDOM.value = Shoe;
        ratingNameDOM.value = Rating;
        typeNameDOM.value = Type;
        priceNameDOM.value = Price;
        // stockNameDOM.value = Stock;
        tempName = name
        if(completed){
            stockNameDOM.checked = true
        }
    }
    catch(error){
        console.log(error)
    }
}
showShoe()

editFormDOM.addEventListener('submit',async (e)=>{
    editBtnDOM.textContent = 'loading...'
    e.preventDefault()
    try{
        const newShoe = {
            "Brand": brandNameDOM.value,
            "Shoe": shoeNameDOM.value,
            "Rating":ratingNameDOM.value,
            "Type":typeNameDOM.value,
            "Price":priceNameDOM.value,
            "Stock": stockNameDOM.checked
        }
        const { data: {shoe}, } = await axios.patch(`/api/v1/shoes/${id}`, newShoe)

        // const { _id: shoeID, completed, name } = shoe;
        // shoeIdDOM.textContent = shoeID;
        // tempName = name;
        // if(completed){
        //     stockNameDOM.checked = true
        // }
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = 'success, edit task'
        formAlertDOM.classList.add('text-success')
    }
    catch(error){
        console.log(error)
        shoeNameDOM.value = tempName
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = 'Error,please try again'
    }
    editBtnDOM.textContent = 'Edit'
    setTimeout(()=>{
        formAlertDOM.style.display= 'none'
        formAlertDOM.classList.remove('text-succcess')
    },3000)
})