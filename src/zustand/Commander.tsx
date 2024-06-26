import Captain from "./Captain";

type CommanderProps = {
  msg: string;
};

const Commander = ({ msg }: CommanderProps) => {
  return (
    <div>
      본부에서 :{msg}
      <Captain msg={msg} />
    </div>
  );
};

export default Commander;
