$(() => {
	// Enable Tooltip for the page
	$('[data-toggle="tooltip"]').tooltip();

	// Toggle Star icon in Inbox
	$("#star-conversations").click(() => {
		$("#star-conversations").toggleClass("is-active");
	});

	// Toggle search and dropdown in inbox section
	$("#search-contact").click(() => {
		$("#search-contact-field").removeClass("d-none");
		$("#search-contact-close").removeClass("d-none");
		$("#search-contact").addClass("d-none");
		$("#dropdown-my-inbox").addClass("d-none");
	})
	$("#search-contact-close").click(() => {
		$("#search-contact-field").addClass("d-none");
		$("#search-contact-close").addClass("d-none");
		$("#search-contact").removeClass("d-none");
		$("#dropdown-my-inbox").removeClass("d-none");
	})

	// Show Menu on Text messaging area by typping / to from a Channed Response
	$("#message-text-field").keypress((e) => {
		if (String.fromCharCode(e.which) === '/') {
			$("#menu-canned-response").addClass("show")
		}
	});
	$("#menu-canned-response .dropdown-item").click((e) => {
		// $('#message-text-field').append($(event.target).attr("value"));
		$("#menu-canned-response").removeClass("show")
	});

	// Detect filter multiple sellect height
	$("#miltiselect-filter").attr("size", $("#miltiselect-filter option").length);

	// Toggle Filter dropdown & togglt icon filter active color
	$(".filter-icon").click((e) => {
		$(e.target).toggleClass("active");
		$(".filter-icon + form > .miltiselect").toggleClass("show");
	});
});
