const eliElement = document.querySelector('#Eli')
const veliElement = document.querySelector('#Veli')
const pirveliElement = document.querySelector('#Pirveli')
const yaziElement = document.querySelector('#yazi')

pirveliElement.addEventListener('click', function () {
if (eliElement.value == 'Eli' && veliElement.value == 'Aghayev'){
    yaziElement.innerHTML ='Salam' + ' Xow Geldin'
    document.body.style.backgroundColor = "red"
}else{
    yaziElement.innerHTML ='Melumatlar Sehfdi'
    document.body.style.backgroundColor = "green"
    alert('Melumatlar sehfdi')
}
    
})
