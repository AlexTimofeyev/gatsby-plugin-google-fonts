const _interopRequireDefault = (obj) =>
  obj && obj.__esModule ? obj : { default: obj };

const _react = _interopRequireDefault(require("react"));

const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;
const formatFont = (font) => font.split(" ").map(capitalize).join(" ");
const formatFonts = (fonts) =>
  fonts.map(formatFont).join("|").replace(/ /g, "+");

exports.onRenderBody = (
  { setHeadComponents },
  { fonts, display, preconnect, attributes = {} }
) => {
  let href = `https://fonts.googleapis.com/css?family=${formatFonts(fonts)}`;
  if (display) href += `&display=${display}`;

  const components = [
    _react.default.createElement("link", {
      href,
      key: "fonts",
      rel: "stylesheet",
      type: "text/css",
      crossOrigin: preconnect ? "anonymous" : undefined,
      ...attributes,
    }),
  ];
  if (preconnect)
    components.unshift([
      _react.default.createElement("link", {
        key: "google-fonts-preconnect",
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossOrigin: "anonymous",
      }),
    ]);

  setHeadComponents(components);
};
