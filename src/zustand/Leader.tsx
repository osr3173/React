// import { useBearStore } from "../store/useStroe";
import { useEmergencyStore } from "../store/useStroe";
type LeaderProps = {
  msg: string;
};

const Leader = ({ msg }: LeaderProps) => {
  const { isEmergency } = useEmergencyStore();

  return (
    <div style={isEmergency ? { color: "red" } : { color: "black" }}>
      중대장께서 :{msg} 곰 개수
    </div>
  );
};

export default Leader;
