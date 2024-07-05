import { Box, BoxProps } from "@mui/material";
import { forwardRef, ForwardRefRenderFunction } from "react";

type Props = Omit<BoxProps, "display">;

const FlexBox: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { ...props },
  ref
) => {
  return <Box {...props} display="flex" ref={ref} />;
};

export default forwardRef(FlexBox);
