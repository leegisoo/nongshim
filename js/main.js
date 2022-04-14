const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const a4 = document.querySelector('.a4');
const a5 = document.querySelector('.a5');
const menu = document.querySelector('.menu');
const header = document.querySelector('header')

// 메뉴바 모션//
a1.addEventListener("mouseover", e => {
	const s1 = document.querySelector('.s1')
	s1.style = "opacity:1"
})

a1.addEventListener("mouseout", e => {
	const s1 = document.querySelector('.s1')
	s1.style = "top:0px"
})

a2.addEventListener("mouseover", e => {
	const s2 = document.querySelector('.s2')
	s2.style = "opacity:1"
})

a2.addEventListener("mouseout", e => {
	const s2 = document.querySelector('.s2')
	s2.style = "top:0px"
})

a3.addEventListener("mouseover", e => {
	const s3 = document.querySelector('.s3')
	s3.style = "opacity:1"
})

a3.addEventListener("mouseout", e => {
	const s3 = document.querySelector('.s3')
	s3.style = "top:0px"
})
a4.addEventListener("mouseover", e => {
	const s4 = document.querySelector('.s4')
	s4.style = "opacity:1"
})

a4.addEventListener("mouseout", e => {
	const s4 = document.querySelector('.s4')
	s4.style = "top:0px"
})
a5.addEventListener("mouseover", e => {
	const s5 = document.querySelector('.s5')
	s5.style = "opacity:1"
})

a5.addEventListener("mouseout", e => {
	const s5 = document.querySelector('.s5')
	s5.style = "top:0px"
})
// 메뉴바 모션end//

//농심소식 모션//
const card1 = document.querySelector('.card1');
card1.addEventListener("mouseover", e => {
	const more1 = document.querySelector('.more1')
	more1.style.opacity = "1";
})

card1.addEventListener("mouseout", e => {
	const more1 = document.querySelector('.more1')
	more1.style.opacity = "0";
})

const card2 = document.querySelector('.card2');
card2.addEventListener("mouseover", e => {
	const more2 = document.querySelector('.more2')
	more2.style.opacity = "1";
})

card2.addEventListener("mouseout", e => {
	const more2 = document.querySelector('.more2')
	more2.style.opacity = "0";
})

const card3 = document.querySelector('.card3')
card3.addEventListener("mouseover", e => {
	const more3 = document.querySelector('.more3')
	more3.style.opacity = "1";
})

card3.addEventListener("mouseout", e => {
	const more3 = document.querySelector('.more3')
	more3.style.opacity = "0";
})

const card4 = document.querySelector('.card4')
card4.addEventListener("mouseover", e => {
	const more4 = document.querySelector('.more4')
	more4.style.opacity = "1";
})

card4.addEventListener("mouseout", e => {
	const more4 = document.querySelector('.more4')
	more4.style.opacity = "0";
})

const card5 = document.querySelector('.card5')
card5.addEventListener("mouseover", e => {
	const more5 = document.querySelector('.more5')
	more5.style.opacity = "1";
})

card5.addEventListener("mouseout", e => {
	const more5 = document.querySelector('.more5')
	more5.style.opacity = "0";
})
//농심소식 모션 end//

//스크롤 모션//
window.addEventListener("scroll", e => {
	const hi = window.scrollY;
	console.log(hi)

	if (hi > 400) {
		const newsh = document.querySelector('.newsh')
		newsh.classList.add('on')
	}

	if (hi > 550) {
		setTimeout(() => {
			card1.classList.add('on')
		}, 500)
		setTimeout(() => {
			card2.classList.add('on')
		}, 800)
		setTimeout(() => {
			card3.classList.add('on')
		}, 1100)
		setTimeout(() => {
			card4.classList.add('on')
		}, 1400)
		setTimeout(() => {
			card5.classList.add('on')
		}, 1700)
	}

	if (hi > 1700) {
		const brandh = document.querySelector('.brandh')
		brandh.classList.add('on')

		setTimeout(() => {
			const cardlogo = document.querySelector('.cardlogo')
			cardlogo.classList.add('on')
		}, 500)
	}

	if (hi > 2000) {
		const brandst = document.querySelector('.brandst')
		brandst.classList.add('on')
	}

	if (hi > 2500) {
		const brandbox = document.querySelector('.brandbox')
		brandbox.classList.add('on')
	}

	if (hi > 3200) {
		const conh = document.querySelector('.conh')
		conh.classList.add('on')
	}

	if (hi > 3500) {
		const constt = document.querySelector('.constt')
		constt.classList.add('on')
	}

	if (hi > 3700) {
		const conef = document.querySelector('.conef')
		conef.style.opacity = "1"
		setTimeout(() => {
			conef.classList.add('on')
		}, 800);
		setTimeout(() => {
			const context = document.querySelector('.context')
			context.classList.add('on')
		}, 1500);
	}

	if (hi > 4500) {
		const proh = document.querySelector('.proh')
		proh.classList.add('on')
		const prost = document.querySelector('.prost')
		prost.classList.add('on')
	}

	if (hi > 5200) {
		const proimh = document.querySelector('.proim h1')
		proimh.classList.add('on')
	}
	if (hi > 6900) {
		const p1 = document.querySelector('.p1')
		const p2 = document.querySelector('.p2')
		const p3 = document.querySelector('.p3')
		const nootext = document.querySelector('.nootext')
		p1.classList.add('on')
		setTimeout(() => {
			p2.classList.add('on')
		}, 500);
		setTimeout(() => {
			p3.classList.add('on')
		}, 1000);
		setTimeout(() => {
			p3.classList.add('on')
		}, 1000);
		setTimeout(() => {
			nootext.style.opacity = "0"
		}, 2000);
		setTimeout(() => {
			const nooimg = document.querySelector('.nooimg')
			nooimg.style.opacity = '1'
			const lefttext = document.querySelector('.lefttext')
			lefttext.classList.add('on')
			const leftimg = document.querySelector('.leftimg')
			leftimg.classList.add('on')
			const right = document.querySelector('.right')
			right.classList.add('on')
		}, 3000);

		if (hi > 7900) {
			const recst = document.querySelector('.recst')
			recst.classList.add('on')
		}
	}
})
//스크롤 모션end//