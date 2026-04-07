(() => {
  // src/js/console.js
  console.log("iDocs block theme script loaded");

  // src/js/block-variation.js
  var { registerBlockVariation } = window.wp.blocks;
  registerBlockVariation("core/cover", {
    name: "wide-banner-core",
    title: "Wide Banner (Modified Core)",
    description: "A wide banner with background image and call-to-action.",
    icon: "cover-image",
    category: "media",
    attributes: {
      className: "wide-banner",
      align: "wide",
      dimRatio: 70,
      isUserOverlayColor: true,
      style: {
        border: {
          radius: {
            topLeft: "12px",
            topRight: "12px",
            bottomLeft: "12px",
            bottomRight: "12px"
          }
        }
      }
    },
    innerBlocks: [
      ["core/group", { className: "wide-banner__content", layout: { type: "flex", flexWrap: "nowrap", orientation: "vertical", justifyContent: "center" } }, [
        ["core/heading", { placeholder: "Banner Heading" }],
        ["core/paragraph", { placeholder: "Add banner description text." }],
        ["core/buttons", { layout: { type: "flex", justifyContent: "center" } }, [
          ["core/button", { text: "View Program Site", url: "#" }],
          ["core/button", { text: "Apply Now", className: "is-style-secondary" }]
        ]]
      ]]
    ],
    isActive: (blockAttributes) => blockAttributes.className?.includes("wide-banner")
  });
})();
