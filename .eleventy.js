module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/css/");
	eleventyConfig.addPassthroughCopy("src/assets/js/");
	eleventyConfig.addPassthroughCopy("src/assets/functions/");
	eleventyConfig.addPassthroughCopy("src/assets/webfonts");
	eleventyConfig.addPassthroughCopy("src/assets/img/");
	return {
		dir:{
			input:"src",
			output:"_site"
		}
	}
}
