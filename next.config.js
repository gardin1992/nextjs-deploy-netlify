const withSass = require('@zeit/next-sass')
const sitemap = require('nextjs-sitemap-generator')

sitemap({
    baseUrl: '<your_website_base_url>',
    pagesDirectory: __dirname + "/pages",
    targetDirectory: 'static/'
});

module.exports = withSass({
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        }
    }
});
