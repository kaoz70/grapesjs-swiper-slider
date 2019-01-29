import grapesjs from 'grapesjs';
import loadComponents from './components/index';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-swiper-slider', (editor, opts = {}) => {
    const options = {
        ...{
            // Object to extend the default slider block, eg. `{ label: 'Container', attributes: { ... } }`
            // Pass a falsy value to avoid adding the block
            sliderBlock: {},

            // Object to extend the default slider properties, eg. `{ name: 'My Container', draggable: false, ... }`
            swiperProps: {},

            // Object to extend the default slider container properties
            containerProps: {},

            // Object to extend the default wrapper properties
            wrapperProps: {},

            // Object to extend the default slide properties
            slideProps: {},

            // Object to extend the default previous nav properties
            prevProps: {},

            // Object to extend the default next nav properties
            nextProps: {},

            // Object to extend the default pagination properties
            paginationProps: {},

            // Object to extend the default scrollbar properties
            scrollbarProps: {},

            // Default slides
            slideEls: `
              <div class="swiper-slide"><p>Slide 1</p></div>
              <div class="swiper-slide"><p>Slide 2</p></div>
              <div class="swiper-slide"><p>Slide 3</p></div>
            `,

            // Previous nav element string, as for example, an HTML string
            prevEl: `<div class="swiper-button-prev"></div>`,

            // Next nav element string, as for example, an HTML string
            nextEl: `<div class="swiper-button-next"></div>`,

            paginationEl: `<div class="swiper-pagination"></div>`,

            scrollbarEl: `<div class="swiper-scrollbar"></div>`,

            // Class name for the slider frame
            classContainer: 'swiper-container',

            // Class name for slides container
            classWrapper: 'swiper-wrapper',

            // Class name for slides container
            classSlide: 'swiper-slide',

            // Class name for slider previous control
            classPrev: 'swiper-button-prev',

            // Class name for slider next control
            classNext: 'swiper-button-next',

            classPagination: 'swiper-pagination',

            classScrollbar: 'swiper-scrollbar',

            // Script to load dynamically in case no Swiper instance was found
            script: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js',

            // Style to load dynamically in case no Swiper instance was found
            style: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css',

        }, ...opts
    };

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);
});
