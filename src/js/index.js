const html = document.documentElement
const btnChangeContext = document.getElementById('change-theme')

function changeContext(context) {
    html.setAttribute('data-context', context)
}

btnChangeContext.addEventListener('click', () => {
    const currentContext = html.getAttribute('data-context')
    const newContext = currentContext === 'day' ? 'night' : 'day'
    changeContext(newContext)
    updateButtonUI(newContext)
})

function updateButtonUI(context) {
    const button = document.getElementById('change-theme')
    if (context === 'day') {
        button.textContent = '☀️' 
    } else {
        button.textContent = '🌙' 
    }
}

