//Event Targets
let titleArea = document.getElementById('title')
let noteArea = document.getElementById('note')
let submitNoteButton = document.getElementById('addNote')
let noteSum = document.getElementById('noteValue')
let modal = document.getElementById('viewModal')
let modalField = document.querySelector('.modalField')

//Event Handlers
submitNoteButton.addEventListener('click', () => {
    let listTitle = titleArea.value
    let noteInput = noteArea.value
    let listNote = document.createElement('div')
    let noteDelete = document.createElement('button')
    let noteView = document.createElement('button')
    let closeModalButton = document.createElement('button')
    listNote.classList.add('noteStyle')
    noteDelete.classList.add('deleteStyle')
    noteView.classList.add('viewStyle')
    //noteView.classList.add('viewNote')
    noteView.setAttribute('type', 'button')
    noteView.setAttribute('id', 'noteButton')
    closeModalButton.setAttribute('type', 'button')
    closeModalButton.setAttribute('id', 'closeButton')
    noteDelete.innerHTML = 'X'
    noteView.innerHTML = 'VIEW'
    if (listTitle) {
        listNote.innerHTML =
            `<h3>${listTitle}</h3>
        <p>${noteInput}</p>`
    }
    modal.innerHTML =
        `<h3>${listTitle}</h3>
    <p>${noteInput}</p>
    <button type="button" id="closeButton">&times;</button>`
    noteSum.appendChild(listNote)
    listNote.appendChild(noteDelete)
    listNote.appendChild(noteView)
    modal.appendChild(closeModalButton)
    noteArea.value = ""
    titleArea.value = ""

    noteDelete.addEventListener('click', (e) => {
        e.target.parentNode.remove()
    })

    let viewNoteButton = document.getElementById('noteButton')

    viewNoteButton.addEventListener('click', () => {
        modalField.style.display = 'block'
    })

    closeModalButton.addEventListener('click', () => {
        modalField.style.display = 'none'
    })

    modalField.addEventListener('click', (e) => {
        if (e.target == modalField) {
            modalField.style.display = 'none'
        }
    })


    titleArea.focus()
})
