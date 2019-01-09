'use strict';

async function init() {
    let slides_response = await fetch('slides.md');
    let slides = await slides_response.text();
    let textarea = document.querySelector('#source');
    textarea.innerHTML = slides;
    return remark.create();
}

init().catch(error =>
    console.log(error)
);
