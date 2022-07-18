import Button from "@mui/material/Button";

const Boton = ({ text, icon, onclick }: IProps) => {
  return (
    <Button variant="outlined" startIcon={icon} onClick={onclick}>
      {text}
    </Button>
  );
};

type IProps = {
  text: string;
  icon: any;
  onclick: () => void;
};

export { Boton };
