const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
const tabActive = $('.tab-item.active')
    function handleLineActive(a = tabActive) {
        const line = $('.line')

        line.style.width = a.offsetWidth + 'px'
        line.style.left = a.offsetLeft + 'px'
    }
    handleLineActive()
tabs.forEach(function (tab,index) {
    const pane = panes[index]

    tab.onclick = function () {
        // Đoạn này sao không thay được tabActive cho $('.tab-item.active')
        // vậy ae ...
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')

        handleLineActive(this)
    }
})