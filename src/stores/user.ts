import { create } from 'zustand';

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
  setName: (nama: string) => void;
  setNik: (nik: string) => void;
  setTtl: (ttl: TTL) => void;
  setNoRm: (noRm: string) => void;
  setAge: (umur: string) => void;
  addSypmtom: (gejala: string) => void;
  removeSypmtom: (gejala: string) => void;
} & UserInfo;

export const useUserStore = create<UserStore>()((set) => ({
  nama: '',
  nik: '',
  ttl: { kota: '', tanggal: '', bulan: '', tahun: '' },
  noRm: '',
  umur: '',
  gejala: [],
  setName: (nama) => set(() => ({ nama: nama })),
  setNik: (nik) => set(() => ({ nik: nik })),
  setTtl: (ttl) => set(() => ({ ttl: ttl })),
  setNoRm: (noRm) => set(() => ({ noRm: noRm })),
  setAge: (umur) => set(() => ({ umur: umur })),
  addSypmtom: (gejala) => set((state) => ({ gejala: [...state.gejala, gejala] })),
  removeSypmtom: (gejala) => set((state) => ({ gejala: state.gejala.filter((v) => v != gejala) })),
}));
