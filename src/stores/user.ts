import { create, StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

type TTL = {
  kota: string;
  tanggal: string;
  bulan: string;
  tahun: string;
};

type UserInfo = {
  nama: string;
  nik: string;
  ttl: TTL;
  noRm: string;
  umur: string;
  gejala: string[];
};

type UserStore = {
  setUserInfo: (userInfo: Pick<UserInfo, 'nama' | 'nik' | 'noRm'>) => void;
  addSypmtom: (gejala: string) => void;
  removeSypmtom: (gejala: string) => void;
} & UserInfo;

const useUserStoreBase = create<UserStore>()((set) => ({
  nama: '',
  nik: '',
  ttl: { kota: '', tanggal: '', bulan: '', tahun: '' },
  noRm: '',
  umur: '',
  gejala: [],
  setUserInfo: ({ nama, nik, noRm }) =>
    set(() => ({
      nama: nama,
      nik: nik,
      noRm: noRm,
    })),
  addSypmtom: (gejala) => {
    set((state) => ({ gejala: [...state.gejala, gejala] }));
  },
  removeSypmtom: (gejala) => {
    set((state) => ({ gejala: state.gejala.filter((v) => v != gejala) }));
  },
}));

export const useUserStore = createSelectors(useUserStoreBase);
