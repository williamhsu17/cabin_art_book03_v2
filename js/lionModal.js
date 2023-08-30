function openModal(thisModal) {
    document.getElementById(thisModal).style.display = 'block';
}

function closeModal(thisModal) {
    document.getElementById(thisModal).style.display = 'none';
}

// If user clicks outside the modal, it will close
window.onclick = function(event) {
    var modal = document.getElementById('lionModal');
    if (event.target == modal) {
        closeModal('lionModal');
    }
}
function display_answer() {
    document.getElementById('lion_right_answer').style.display = 'inline';
}