import { Stack, TextField } from "@mui/material";
import MuiButton from "../../components/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type SearchProps = {
  handleClickOpen: () => void;
};

const SearchBar = ({ handleClickOpen }: SearchProps) => {
  return (
    <Stack mt={6} direction="row" spacing={2}>
      <MuiButton variant="outlined" color="success" onClick={handleClickOpen}>
        Add Note
      </MuiButton>
      <TextField
        fullWidth
        color="success"
        placeholder="Search Notes By Tag"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default SearchBar;
