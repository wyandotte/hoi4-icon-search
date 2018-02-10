# Contribute to hoi4-icon-search

## Adding new icons

1. Add the icons as **PNG** images to `docs/assets/images/goals` (or `ideas`, depending on the type.)
2. Create new items at the bottom of either `src/js/data/goals.js` or `ideas.js`, depending on the type.

An item has the following form:

```js
	{
		"name": "GFX_goal_socialist_infrastructure",
		"image": "assets/images/goals/GFX_goal_socialist_infrastructure.png",
		"tags": ["Kaiserreich", "KR", "production", "transportation"]
	},
```

Make sure they have a comma after the last bracket, and that the image path is correct. Each tag needs to be enclosed in quotes and separated by comma's.

3. These changes are not immediately visible on the live site, the code needs to be compiled manually.

## Building the project

Refer to the Readme if you want to build the project yourself. Not recommended if you're not familiar with Node and NPM.
