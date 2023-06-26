const theme = {
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          // bg: "#333341",
          // color: "#ffffff",
          fontSize: "sm",
          minWidth: "70%",
        },
      }),
      variants: {
        default: {
          dialog: {
            minWidth: "70%",
          },
        },
        messaging: {
          dialog: {
            minWidth: "30%",
            position: "absolute",
            bottom: "0",
            right: "3rem",
            minHeight: "400px",
          },
        },
        alert: {
          dialog: {
            minWidth: "40%",
          },
        },
      },
    },
  },
  option: () => ({
    bg: "white",
    color: "black",
    height: "40px",
    cursor: "pointer",
    paddingX: "10px",
    "&:hover": {
      background: "appGreen.regular",
    },
    textAlign: "left",
  }),
};

export default theme;
