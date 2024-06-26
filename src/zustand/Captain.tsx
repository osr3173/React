import Leader from "./Leader";

type CaptainProps = {
  msg: string;
};

const Captain = ({ msg }: CaptainProps) => {
  return (
    <div>
      대대장께서:{msg}
      <Leader msg={msg} />
    </div>
  );
};

export default Captain;
