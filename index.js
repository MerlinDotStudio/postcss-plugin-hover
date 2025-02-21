const postcss = require("postcss");

module.exports = () => {
  return {
    postcssPlugin: "postcss-plugin-hover",
    AtRule: {
      hover: (atRule) => {
        const clonedNodes = atRule.nodes.map((node) => node.clone());

        const focusVisibleRule = postcss
          .rule({ selector: "&:focus-visible" })
          .append(clonedNodes.map((node) => node.clone()));
        const hoverRule = postcss
          .rule({ selector: "&:hover" })
          .append(clonedNodes.map((node) => node.clone()));

        const mediaRule = postcss
          .atRule({
            name: "media",
            params: "(hover: hover) and (pointer: fine)",
          })
          .append(hoverRule);

        atRule.before(focusVisibleRule);
        atRule.before(mediaRule);

        atRule.remove();
      },
    },
  };
};

module.exports.postcss = true;
