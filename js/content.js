function showContent(contentId) {
    // Hide all content divs first
    event.preventDefault();
    const contentDivs = document.querySelectorAll('.content');
    contentDivs.forEach(
        div => {div.style.display = 'none';}
    );

    // Show the selected content
    document.getElementById(contentId).style.display = 'block';
}
function showImageSwitcher(SwitcherId) {
    // Hide all content divs first
    event.preventDefault();
    const contentDivs = document.querySelectorAll('.inline-image-switch');
    contentDivs.forEach(
        div => {div.style.display = 'none';}
    );

    // Show the selected content
    document.getElementById(SwitcherId).style.display = 'block';
}
function changeImage(newSrc, displayField) {
    event.preventDefault();
    const imageElement = document.getElementById(displayField);
    imageElement.src = newSrc;
}
function changeText(newText, displayField) {
    event.preventDefault();
    const textElement = document.getElementById(displayField);
    textElement.innerText = newText;
}