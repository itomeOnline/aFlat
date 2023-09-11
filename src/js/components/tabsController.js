function tabsController () {
	document.addEventListener('click', e => {
		if (e.target.closest('[data-form-tab]')) {
			e.preventDefault();
			e.stopPropagation();

			let tabContainerActive;

			const tabContainer = e.target.closest('[data-form-tabs]');
			const tabBtn = e.target.closest('[data-form-tab]');
			const tabBtnActive = tabContainer.querySelector('.is-active[data-form-tab]');
			const tabBtnId = tabBtn.dataset.formTab;

			if (e.target.closest('.home__tabs_btn')) {
				tabContainerActive = tabContainer.querySelector('.is-active[data-form-parent-container]');
				tabContainer.querySelector(`[data-form-parent-container="${tabBtnId}"]`).classList.add('is-active');
			} else {
				tabContainerActive = tabContainer.querySelector('.is-active[data-form-container]');
				tabContainer.querySelector(`[data-form-container="${tabBtnId}"]`).classList.add('is-active');
			}

			if (tabContainerActive) {
				tabContainerActive.classList.remove('is-active');
			}

			if (tabBtnActive) {
				tabBtnActive.classList.remove('is-active');
			}

			tabBtn.classList.add('is-active');

		}
	})
}


export default tabsController;