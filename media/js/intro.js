/* TITLE PAGE */
const title = document.querySelectorAll('title');
title[0].innerHTML = data.titlePage;
/* END TITLE PAGE */

/* HEADER */
const header = document.querySelectorAll('.header');
header[0].insertAdjacentHTML('beforeEnd',
    `<div class="row">
        <div class="col-md-6">
            <div class="header__logo font">SCI FRAMEWORK</div>
        </div>
        <div class="col-md-6">
            <div class="header__slogan">FRONTEND WEB DEVELOPER SITE </div>
        </div>
    </div>
    <div class="sidebar-icon navIcon">
        <div class="navIcon__line navIcon__line-white navIcon__line-1"></div>
        <div class="navIcon__line navIcon__line-white navIcon__line-2"></div>
        <div class="navIcon__line navIcon__line-white navIcon__line-3"></div>
    </div>`
);

/* END HEADER */

/* SIDEBAR NAV */
const sidebarBox = document.querySelectorAll('.sidebarBox');
let navMenu = '';
let navMenuTitle = '<h2>Components</h2>';
for(item of data.navMenu){
    navMenu += `<a href="${item.link}">${item.name}</a>`;
}

sidebarBox[0].insertAdjacentHTML('beforeEnd',`${navMenuTitle} ${navMenu}`);

/* END SIDEBAR NAV */