/* Setting theme change */
function setColorTheme(theme){
    const root = document.documentElement;
    root.className = theme;

    const toggle = document.getElementById('slider');
    toggle.className = theme;
}

/* Checking system theme preference on load */
window.onload = function () {
    let newTheme = 'light';
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
        newTheme = 'dark';
    }
    setColorTheme(newTheme);
};

/* Checking changes in prefered theme */
const setColorScheme = e => {
    let newTheme = 'light';
    if (e.matches) {
        newTheme = 'dark';
    }
    setColorTheme(newTheme);
}


/* Setting theme change on toggle switch */
function setToggleTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    setColorTheme(newTheme);
}

/* Checking system preference on change and passes it's state to the listener */
const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addEventListener('change', setColorScheme);

function openmenu(){
    var side = document.getElementById("sidecontent");
    var sidebar = document.getElementById("sidebar");
    side.className =  side.className === "sidecontent closetab" ? "sidecontent opentab" : "sidecontent closetab";
    sidebar.className =  sidebar.className === "sidebar closetab" ? "sidebar opentab" : "sidebar closetab";
}

function opentab(tabname){
    var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")
    for (tablink of tablinks){
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabname).classList.add("active")
}