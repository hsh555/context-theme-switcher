const Themes = {
    "LIGHT": {
        background: "#fafafa",
        text: "rgba(0, 0, 0, 0.87) !important",
        elBgColor: "beige !important",
        border: "rgba(0, 0, 0, 0.12) !important",
    },
    "DARK": {
        background: "#303030",
        text: "#fff !important",
        elBgColor: "#555 !important",
        border: "rgba(255, 255, 255, 0.12) !important",
    }
}

const themeStyles = (theme) => {
    return (
        `body {background-color: ${Themes[theme].background}}
        .bg-color {background-color: ${Themes[theme].elBgColor};color:${Themes[theme].text};}
        .text-color{color:${Themes[theme].text}; border-color: ${Themes[theme].border}}`
    );
}

export default themeStyles;