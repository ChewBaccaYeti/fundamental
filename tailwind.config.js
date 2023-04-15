/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {},
    },
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',

        'tailwindcss/custom-forms': {},
        'tailwindcss/aspect-ratio': {},
        'tailwindcss/placeholders': {},
        'tailwindcss/text-shadow': {},
        'tailwindcss/gradients': {},
        'tailwindcss/transitions': {},
        'tailwindcss/transforms': {},
        'tailwindcss/utilities': {},
        'tailwindcss/variants': {},
        'tailwindcss/screens': {},

        'tailwindcss/cursor': {},
        'tailwindcss/display': {},
        'tailwindcss/flex': {},
        'tailwindcss/float': {},
        

        'tailwindcss/font-display': {},
        'tailwindcss/font-variant': {},
        'tailwindcss/font-weights': {},
        'tailwindcss/font-stacks': {},
        'tailwindcss/font-sizes': {},
        'tailwindcss/font-family': {},
        'tailwindcss/font-size': {},
        'tailwindcss/font-style': {},
        'tailwindcss/font-weight': {},

        'tailwindcss/line-height': {},
        'tailwindcss/letter-spacing': {},
        'tailwindcss/list-styles': {},

        'tailwindcss/border-collapse': {},
        'tailwindcss/border-color': {},
        'tailwindcss/border-width': {},
        'tailwindcss/border-style': {},
        'tailwindcss/border-radius': {},
        
        'tailwindcss/grid': {},
        'tailwindcss/justify-content': {},
        'tailwindcss/margin': {},
        'tailwindcss/opacity': {},
        'tailwindcss/outline': {},
        'tailwindcss/padding': {},
        'tailwindcss/z-index': {},

        'tailwindcss/height': {},
        'tailwindcss/width': {},
        'tailwindcss/max-height': {},
        'tailwindcss/max-width': {},
        'tailwindcss/min-height': {},
        'tailwindcss/min-width': {},

        'tailwindcss/text-align': {},
        'tailwindcss/text-decoration': {},
        'tailwindcss/text-transform': {},


        'tailwindcss/table-layout': {},
        'tailwindcss/vertical-align': {},
        'tailwindcss/whitespace': {},
        tailwindcss: {},
        autoprefixer: {},
    },
};
