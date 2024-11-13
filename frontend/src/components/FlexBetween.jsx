const { styled } = require("@mui/system");
const { Box } = require("@mui/material");
// Styled component
const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",   
});

export default FlexBetween;