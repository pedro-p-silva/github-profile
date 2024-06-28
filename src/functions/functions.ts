export function ternaryCondition(data: object, message: string) {
    return data ? data : message
}

export function alertMessage(selector: Element | null){
    selector?.removeAttribute('hidden')

    setTimeout(function () {
        selector?.setAttribute('hidden', 'true')
    }, 1500)
}

export function validatePage(e: {}){
    const card = document.querySelector('.card');
    const box_search = document.querySelector('.box-search')
    const box_area = document.querySelector('.box-area')
    const show_repos = document.querySelector('#show_repos')
    const hide_repos = document.querySelector('#hide_repos')

    if (e === 'initial_page') {
        card?.setAttribute('style', 'display: none')
        box_search?.removeAttribute('hidden')
        box_area?.setAttribute('style', 'display: none')
        show_repos?.removeAttribute('style')
        hide_repos?.setAttribute('style', 'display: none')
    }

    if (e === 'third_page') {
        window.location.href = '#box-area'
        box_area?.removeAttribute('style')
        show_repos?.setAttribute('style', 'display: none')
        hide_repos?.removeAttribute('style')
    }

    if (e === 'hide_repos') {
        box_area?.setAttribute('style', 'display: none')
        show_repos?.removeAttribute('style')
        hide_repos?.setAttribute('style', 'display: none')
    }
}