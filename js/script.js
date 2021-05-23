let contactArray = Array.from(document.querySelectorAll('li.cf'))

function pageNum() {
    return Math.ceil(contactArray.length / 10);
}

function generateElement(numberOfPages) {

    const pagination = document.querySelector('.pagination')
    for (let index = 1; index <= numberOfPages; index++) {

        pagination.insertAdjacentHTML("beforeend", `<li class="page-link"><a href="#">${index}</a></li>`);

    }

}

function showElement(e) {
    e.preventDefault()
    let page = parseInt(e.target.text)
    let upper = page * 10;
    let lower = upper - 10;
    
    for (let i = 0; i < contactArray.length; i++) {
        if (i >= lower && i < upper) {
            contactArray[i].hidden = false;
        }else{
            contactArray[i].hidden = true;
        }
    }
}

generateElement(pageNum());

let pageLink = Array.from(document.querySelectorAll('li.page-link'))
pageLink.map(link => link.addEventListener('click', showElement))



