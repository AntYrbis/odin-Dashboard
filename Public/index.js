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

/* Listening to intersection for the sticky switch on mobile design*//*
if (
    "IntersectionObserver" in window &&
    "IntersectionObserverEntry" in window &&
    "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 0) {
        const toggle = document.getElementsByClassName('switch')[0];
        toggle.classList.add("not_top");
        toggle.classList.remove("top");
        console.log("add")
    } else {
        const toggle = document.getElementsByClassName('switch')[0];
        toggle.classList.add("not_top");
        toggle.classList.remove("not_top");
        console.log("remove")
    }
});
observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}*/