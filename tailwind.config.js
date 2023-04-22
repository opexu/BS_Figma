/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/*.{html,js,css,vue}',
        './src/**/*.{html,js,css,vue}'
    ],
    // purge больше не используется в tailwond 3.0
    // purge: [
    //     './index.html',
    //     './src/*.{html,js,css,vue}',
    //     './src/**/*.{html,js,css,vue}'
    // ],
    mode: 'jit',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient( 100% 100% at 50% 0%, var(--tw-gradient-stops) )',
            },
        },
    },
    plugins: [],
}
