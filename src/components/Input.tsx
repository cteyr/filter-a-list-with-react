import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#42a5f5",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#42a5f5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#42a5f5",
    },
    "&:hover fieldset": {
      borderColor: "#42a5f5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#42a5f5",
    },
  },
});

const Input = ({ value, onchange }: IProps) => {
  return (
    <CssTextField
      label="Search name"
      id="custom-css-outlined-input"
      className="Input"
      value={value}
      onChange={onchange}
      InputLabelProps={{
        style: {
          color: "#90caf9",
        },
      }}
    />
  );
};

type IProps = {
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export { Input };
