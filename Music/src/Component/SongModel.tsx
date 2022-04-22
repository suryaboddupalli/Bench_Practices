import { IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Model(props: any) {
  if (!props.open) return null;
  return (
    <div>
      <Box>
        <IconButton onClick={props.isClose} sx={{ float: "right" }}>
          <CloseIcon color="error" />
        </IconButton>
      </Box>
      {props.children}
    </div>
  );
}

export default Model;
