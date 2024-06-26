import { create } from "zustand";

type State = {
  bears: number;
  increase: () => void;
};

type Emergency = {
  isEmergency: boolean;
  bell: () => void;
};

export const useEmergencyStore = create<Emergency>((set) => ({
  isEmergency: false,
  bell: () => set((state) => ({ isEmergency: !state.isEmergency })),
}));

// 대대장, 중대장 리렌더링 + 다른 것까지 관여함 [양날의 검]
// export const useBearStore = create<State>((set) => ({
//   bears: 0,
//   increase: () => set((state) => ({ bears: state.bears + 1 })),
// }));
