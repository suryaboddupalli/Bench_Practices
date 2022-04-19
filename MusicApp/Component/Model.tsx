import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Model(props: any) {
  if (!props.open) return null;
  return (
    <div>
      <IconButton onClick={props.isClose} sx={{ float: "right" }}>
        <CloseIcon color="error" />
      </IconButton>
      {props.children}
    </div>
  );
}

export default Model;
