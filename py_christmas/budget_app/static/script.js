const apihost = '/hint/?start='

let description = document.querySelector('#description')
const ul = document.querySelector('#hints')






description.addEventListener("keyup", function (e){
    if (!e.target.value){
        let dlugosc = ul.children.length
        for (let i=dlugosc-1; i >= 0 ; i--) {
        ul.children[i].remove()
    }
    } else {
    fetch(apihost + e.target.value).then(
        function (resp){
            if (!resp.ok){
                alert('brak jsona')
            }
            return resp.json()
        }
    ).then(
        function (resp) {
            return resp.hints.forEach(function (el){
            let li = document.createElement('li')
            li.innerText = el
            ul.appendChild(li)
            })


        }
    ).then(
        function (el) {
            for (let i=0; i < ul.children.length; i++) {
    ul.children[i].addEventListener('click', function (el){
        description.value = ul.children[i].innerText
    })
}
        }
    )

    }})









//
// .then(function (){
//         const ul = document.querySelector('#hints')
//         const li = document.createElement('li')
//         li.innerText = el
//         ul.appendChild(li)


