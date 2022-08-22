/* Setting Button Event */
let settingButton = document.getElementById('main-header-tools-settings-btn');
settingButton.addEventListener('click', () => {
    let settingButtonDropDown = document.querySelector('.main-header-tools-settings .main-header-tools-setting-dropdown');
    if (settingButtonDropDown.style.display == 'flex') {
        settingButtonDropDown.style.display = 'none';
    } else {
        settingButtonDropDown.style.display = 'flex';
    }
});
/* Setting Button Event */