$(document).ready( function () {
    $('#myTable').DataTable();
} );
const sidebar_menu = document.querySelectorAll('.sidebar_menu ul li a');
if (sidebar_menu) {
    sidebar_menu.forEach(item => {
        item.onclick = (e) =>{
            sidebar_menu.forEach(data => {
                data.classList.remove('active');
            });
        item.classList.add('active');
        }
    });
};
const main_card = document.querySelectorAll('.main .cards .card_single');
if (main_card) {
    main_card.forEach(item => {
        item.onclick = (e) =>{
            main_card.forEach(data => {
                data.classList.remove('active');
            });
            item.classList.add('active');
        }
    });
}