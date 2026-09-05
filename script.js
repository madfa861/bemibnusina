function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
