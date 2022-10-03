const init = () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', event => {
        event.preventDefault()
        let input = document.querySelector('input#searchByID')
        console.log(input.value)
    
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            let title = document.querySelector('#movieDetails h4')
            let summary = document.querySelector('#movieDetails p')
            title.textContent = data.title;
            summary.textContent = data.summary;
            console.log(`title: ${data.title}; summery: ${data.summary}`)
        })
    })
    
}

document.addEventListener('DOMContentLoaded', init);




