import Button from "@mui/material/Button";

const Boton = ({ text, icon, onclick, classname }: IProps) => {
  return (
    <Button
      className={classname}
      variant="outlined"
      startIcon={icon}
      onClick={onclick}
    >
      {text}
    </Button>
  );
};

type IProps = {
  text: string;
  icon: any;
  onclick: () => void;
  classname: string;
};

export { Boton };
