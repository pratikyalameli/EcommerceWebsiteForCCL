const alert = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML= err;
    errorEle.classList.add('show');
}