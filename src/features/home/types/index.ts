import z from 'zod';

// FIX: create ttl and maybe no. rm type
export const formSchema = z.object({
  nama: z.string().min(3, 'required'),
  nik: z.string().min(10, 'required'),
  tempatLahir: z.string().min(3, 'required'),
  tanggalLahir: z.string().min(3, 'required'),
  noRm: z.string().min(1, 'required'),
});

export type TFormSchema = z.infer<typeof formSchema>;
