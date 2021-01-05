export let defaultHtml = `<h1>I am a headline made with HTML</h1>
<p id="p">And I am a simple text paragraph. The color of this text is styled with CSS. Click the button below to remove me through the power JavaScript.</p>
<button id="btn">Hide the text above</button>`

export let defaultCss = `
body {
	font-family: sans-serif;
	text-align: center;
	padding: 3rem;
	font-size: 1.125rem;
	line-height: 1.5;
	transition: all 725ms ease-in-out;
}

h1 {
	font-size: 2rem;
	font-weight: bolder;
	margin-bottom: 1rem;
}

p {
	margin-bottom: 1rem;
	color: tomato;
}

button {
	cursor: pointer;
	appearance: none;
	border-radius: 4px;
	font-size: 1.25rem;
	padding: 0.75rem 1rem;
	border: 1px solid navy;
	background-color: dodgerblue;
	color: white;
}
`

export let defaultJs = `
const btn = document.getElementById('btn');
const p = document.getElementById('p');

btn.addEventListener('click', () => {
  p.style.opacity = 0;
})
`
