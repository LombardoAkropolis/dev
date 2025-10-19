// ==UserScript==
// @name        full-image
// @namespace   https://github.com/ghstbny
// @match       https://1*xpics.space/image/*
// @match       https://13xpics.space/image/*
// @match       https://14xpics.space/image/*
// @match       https://22pixx.xyz/*/*
// @match       https://37xpics.space/image/*
// @match       https://bdsmlust.com/*/image/*
// @match       https://bunkr.*/i/*
// @match       https://bunkr.ac/i/*
// @match       https://bunkr.ax/i/*
// @match       https://bunkr.black/i/*
// @match       https://bunkr.cat/i/*
// @match       https://bunkr.ci/i/*
// @match       https://bunkr.fi/i/*
// @match       https://bunkr.la/i/*
// @match       https://bunkr.media/i/*
// @match       https://bunkr.ph/i/*
// @match       https://bunkr.pk/i/*
// @match       https://bunkr.ps/i/*
// @match       https://bunkr.red/i/*
// @match       https://bunkr.si/i/*
// @match       https://bunkr.site/i/*
// @match       https://bunkr.sk/i/*
// @match       https://bunkr.su/i/*
// @match       https://bunkr.ws/i/*
// @match       https://bunkrr.*/i/*
// @match       https://bunkrr.ru/i/*
// @match       https://bunkrr.su/i/*
// @match       https://bunkrrr.org/i/*
// @match       https://fastpic.org/*view/*
// @match       https://fotokiz.com/*
// @match       https://ibb.co/*
// @match       https://imagetwist.com/*/*
// @match       https://www.imagevenue.com/*
// @match       https://img.trafficimage.club/image/*
// @match       https://imgadult.com/img-*
// @match       https://imgbaron.com/*
// @match       https://imgbox.com/*
// @match       https://imgcloud.pw/image/*
// @match       https://imgdawgknuttz.com/img-*
// @match       https://imgdrive.net/img-*
// @match       https://imgjjtr.sbs/*
// @match       https://imgnova.cc/*
// @match       https://imgouhmde.sbs/*
// @match       https://imgqnnnebrf.sbs/*
// @match       https://imgqqwebrf.sbs/*
// @match       https://imgstar.eu/*
// @match       https://imgtaxi.com/img-*
// @match       https://imgtraffic.com/*/*
// @match       https://imgwwqbm.shop/*
// @match       https://imgxxt.in/image/*
// @match       https://im.ge/i/*
// @match       https://imx.to/i/*
// @match       https://infosman.top/img-*
// @match       https://jpg*.su/img/*
// @match       https://jpg3.su/img/*
// @match       https://jpg4.su/img/*
// @match       https://jpg5.su/img/*
// @match       https://jpg6.su/img/*
// @match       https://kropic.com/*
// @match       https://kvador.com/*
// @match       https://lookmyimg.com/image/*
// @match       https://picbaron.com/*
// @match       https://pics-view.com/image/*
// @match       https://pics4you.net/*
// @match       https://picuenr.sbs/*
// @match       https://pilot007.org/image/*
// @match       https://pimpandhost.com/image/*
// @match       https://pichost.biz/viewer.php?id=*
// @match       https://pixhost.to/show/*
// @match       https://postimg.cc/*
// @match       https://rintor.space/image/*
// @match       https://shotcan.com/image/*
// @match       https://teenyxo.com/image/*
// @match       https://thotimg.xyz/*
// @match       https://trafficimage.club/image/*
// @match       https://trans.firm.in/img-*
// @match       https://imagebam.com/view/*
// @match       https://imagebam.com/image/*
// @match       https://www.imagebam.com/view/*
// @match       https://www.imagebam.com/image/*
// @match       https://imagepond.net/image/*
// @match       https://www.imagepond.net/image/*
// @match       https://xxxaddicted.online/image/*
// @match       https://xxximg.top/image/*
// @match       https://xxxwebdlxxx.org/img-*
// @match       https://xxxwebdlxxx.top/img-*
// @grant       none
// @version     1.0.33
// @author      ghstbny
// @description display images in full page
// @downloadURL https://gist.github.com/ghstbny/7bd8ab6594fa95c8525f7bac4545222c/raw/full-image.user.js
// ==/UserScript==

function waitForElm(selector, el) {
	el ??= document;

	return new Promise((resolve) => {
		if (el.querySelector(selector)) {
			return resolve(el.querySelector(selector));
		}

		const observer = new MutationObserver((mutations) => {
			if (el.querySelector(selector)) {
				resolve(el.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(el, {
			childList: true,
			subtree: true,
		});
	});
}

const setLocation = (element) => {
	location = element.src;
};

const notMediumImage = '[src$=".md.gif"]):not([src$=".md.jpeg"]):not([src$=".md.jpg"]):not([src$=".md.png"]):not([src$=".md.webp"]';
const notLoadingImage = '[src$="loading.svg"]';

switch (location.hostname) {
	case "22pixx.xyz":
	case "imgtraffic.com": {
		waitForElm("center a > img").then(setLocation);
		break;
	}
	case "fastpic.org": {
		waitForElm("#imglink").then((element) => element.click());
		waitForElm("#imga > img").then(setLocation);
		break;
	}
	case "imgadult.com":
	case "imgdrive.net":
	case "imgtaxi.com": {
		waitForElm("a.overlay_ad_link").then((element) => element.click());
		waitForElm("img.centred_resized").then(setLocation);
		break;
	}
	case "imgbox.com": {
		waitForElm("#img").then(setLocation);
		break;
	}
	case "imgdawgknuttz.com":
	case "infosman.top":
	case "trans.firm.in": {
		waitForElm('input[name="imgContinue"]').then((element) => element.click());
		waitForElm("img.centred_resized").then(setLocation);
		break;
	}
	case "bdsmlust.com":
	case "ibb.co":
	case "img.trafficimage.club":
	case "imgcloud.pw":
	case "imgxxt.in":
	case "im.ge":
	case "jpg3.su":
	case "jpg4.su":
	case "jpg5.su":
	case "jpg6.su":
	case "lookmyimg.com":
	case "pics-view.com":
	case "pilot007.org":
	case "teenyxo.com":
	case "trafficimage.club":
	case "rintor.space":
	case "shotcan.com":
	case "xxxaddicted.online":
	case "xxximg.top": {
		waitForElm("#image-viewer-loader").then((element) => element.click());
		waitForElm("#image-viewer-container").then((root) => {
			waitForElm(
				`img:not(${notMediumImage}):not(${notLoadingImage})`,
				root
			).then(setLocation);
		});
		break;
	}
	case "fotokiz.com":
	case "imagetwist.com":
	case "imgbaron.com":
	case "imgnova.cc":
	case "imgstar.eu":
	case "picbaron.com":
	case "pics4you.net":
	case "kropic.com":
	case "kvador.com": {
		waitForElm('input[name="next"]').then((element) => element.click());
		waitForElm("img.pic").then(setLocation);
		break;
	}
	case "imgjjtr.sbs":
	case "imgouhmde.sbs":
	case "imgqnnnebrf.sbs":
	case "imgqqwebrf.sbs":
	case "imgwwqbm.shop":
	case "picuenr.sbs": {
		waitForElm("li:not(.d-none) > a > #uhaha").then((element) => element.click());
		waitForElm('#newImgE[src^="http"]').then(setLocation);
		break;
	}
	case "imx.to": {
		waitForElm('input[name="imgContinue"]').then((element) => element.click());
		waitForElm("img.centred").then(setLocation);
		break;
	}
	case "pichost.biz": {
		waitForElm("img").then(setLocation);
		break;
	}
	case "pixhost.to": {
		waitForElm("#image").then(setLocation);
		break;
	}
	case "pimpandhost.com": {
		waitForElm("img.normal").then((element) => element.click());
		waitForElm('img.original').then(setLocation);
		break;
	}
	case "www.imagevenue.com":
	case "postimg.cc": {
		waitForElm("#main-image").then(setLocation);
		break;
	}
	case "imagebam.com":
	case "www.imagebam.com": {
		waitForElm("#continue > a").then((element) => element.click());
		waitForElm("img.main-image").then(setLocation);
		break;
	}
	case "imagepond.net":
	case "www.imagepond.net": {
		waitForElm('#image-viewer > img.media:not('+notMediumImage+')').then(setLocation);
		break
	}
	case "thotimg.xyz": {
		waitForElm("center > img").then(setLocation);
		break;
	}
	case "xxxwebdlxxx.org":
	case "xxxwebdlxxx.top": {
		waitForElm("img.centred").then(setLocation);
		waitForElm("img.centred_resized").then(setLocation);
		break;
	}
	// partial match
	case location.hostname: {
		switch (true) {
			case location.hostname.startsWith("bunkr"): {
				waitForElm("div.lightgallery > img").then(setLocation);
				break;
			}
			case location.hostname.endsWith("xpics.space"): {
				waitForElm("#image-viewer-loader").then((element) => element.click());
				waitForElm("#image-viewer-container").then((root) => {
					waitForElm(
						'img:not('+notMediumImage+')',
						root
					).then(setLocation);
				});
				break;
			}
		}
		break;
	}
}