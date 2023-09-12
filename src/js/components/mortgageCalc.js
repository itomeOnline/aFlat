function mortgageCalc () {
    const mainBlocks = document.querySelectorAll('[data-input-block=""]')

    mainBlocks.forEach(block => {
        const buttons = block.querySelectorAll('.mortgage_calc_table_tabs__btn');
        const input = block.querySelector('.input_auto');
        const checkbox = block.querySelector('.mortgage_calc_table__checkbox');

        buttons.forEach(btn => {
            btn.addEventListener('click', _ => {
                input.value = btn.querySelector('.radio').value;
            })
        })

        if (checkbox) {
            checkbox.addEventListener('click', _ => {
                input.value = checkbox.querySelector('.checkbox').value;
            })
        }

    })
}

export default mortgageCalc;