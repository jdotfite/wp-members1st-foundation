// File: resources/js/modules/svg-converter.js

export function initSvgConverter() {
    function replaceImgWithSVG() {
        document.querySelectorAll('img.svg-convert').forEach(img => {
            const imageUrl = img.src;
            const width = img.getAttribute('width');
            const classes = img.classList;
            
            fetch(imageUrl)
                .then(response => response.text())
                .then(data => {
                    const container = document.createElement('div');
                    container.innerHTML = data;
                    const svg = container.querySelector('svg');
                    if (svg) {
                        classes.forEach(cls => {
                            if (cls !== 'svg-convert') {
                                svg.classList.add(cls);
                            }
                        });
                        svg.classList.add('svg-converted');
                        if (width) {
                            svg.setAttribute('width', width);
                            svg.setAttribute('height', 'auto');
                        }
                        img.parentNode.replaceChild(svg, img);
                    }
                })
                .catch(error => {
                    console.error('Error loading or replacing the SVG:', imageUrl, error);
                });
        });
    }

    replaceImgWithSVG();
}