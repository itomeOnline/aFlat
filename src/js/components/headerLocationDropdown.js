function headerLocationDropdown() {
    const blocks = document.querySelectorAll('[data-location-dropdown-block]');

    blocks.forEach(block => {
        const btn = block.querySelector('[data-location-dropdown-main-btn]');
        const btnClose = block.querySelector('[data-btn-close]');
        const clickChangeBtns = block.querySelectorAll('[data-click-change]');
        const clickChangeText = block.querySelector('[data-change-text=""]');
   
        btn.addEventListener('click', _ => {
            block.classList.toggle('is-open');
        })
    
        btnClose.addEventListener('click', _ => {
            block.classList.remove('is-open');
        })
    
        clickChangeBtns.forEach(btn => {
            btn.addEventListener('click', _ => {
                clickChangeText.textContent = btn.textContent;
                block.classList.remove('is-open');
            })
        })
    })

}

export default headerLocationDropdown;