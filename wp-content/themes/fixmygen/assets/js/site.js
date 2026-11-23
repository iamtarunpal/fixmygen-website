(function () {
	var btn = document.querySelector('.menu-toggle');
	var nav = document.getElementById('main-nav');
	if (btn && nav) {
		btn.addEventListener('click', function () {
			var open = nav.classList.toggle('open');
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
		});
		nav.addEventListener('click', function (e) {
			if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
		});
	}
	// "Get a quote" links pre-select that service in the enquiry form.
	document.addEventListener('click', function (e) {
		var a = e.target.closest && e.target.closest('[data-service]');
		if (!a) return;
		var sel = document.getElementById('fmg-service');
		if (!sel) return;
		for (var i = 0; i < sel.options.length; i++) {
			if (sel.options[i].text === a.getAttribute('data-service')) { sel.selectedIndex = i; break; }
		}
	});
})();
