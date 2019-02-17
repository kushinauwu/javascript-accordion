/* select all elements with claass main and cotent and save in respectively named constants */
const mainElement = document.querySelectorAll(".main");
const contentElement = document.querySelectorAll(".content");

/* loop till all elements of mainElement are done*/
for (let x = 0; x < mainElement.length; x++) {

    /* listen for onClick event and run an anonymous function */
    mainElement[x].addEventListener("click", function () {
        /*return next sibling element of same type , in this case, the next div ie the content*/
        console.log(mainElement[x].nextElementSibling);

        /* Clear active in case any div is already active. make next sibling class active on clicking, i.e show it. Display was set to none by default.*/
        clearActive();
        mainElement[x].nextElementSibling.classList.toggle("active");
    });

}

/* clears active class on click*/
function clearActive() {
    /* loop through each elemnt in contentElement */
    for (let x = 0; x < contentElement.length; x++) {
        contentElement[x].classList.remove("active");
    }
}
