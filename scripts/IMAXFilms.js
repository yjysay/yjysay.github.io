/* CSD 122 - IMAXFilms.js - Junyeong Yoo */

/** 
 * openPage - hides all informations about films
 */
function openPage() {
	$(".information").hide();
}

/** 
 * clickPosterButton - allows film information to be opened if a film poster is clicked and information closes again if the same poster is clicked again
 * 0.5 seconds interval for the information to open
 * @param id - film informations that are to be validated
 */
function clickPosterButton(id) {
	var oldId = $(".information:visible").attr("id");
	$(".information:visible").slideUp();
	if (id != oldId) {
		$("#" + id).delay(500).slideDown();
	}
}