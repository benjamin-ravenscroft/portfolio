module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/css');
    
    return {
        pathPrefix: "/portfolio/",
        dir: {
            data: '_data',
            input: 'src',
            output: '_site',
        },
    };
};
