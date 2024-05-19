import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUserStore } from '@/stores/user';

const formSchema = z.object({
  nama: z.string().min(3, 'required'),
  nik: z.string().min(10, 'required'),
  tempatLahir: z.string().min(3, 'required'),
  tanggalLahir: z.string().min(3, 'required'),
  noRm: z.string().min(1, 'required'),
});

export type TFormSchema = z.infer<typeof formSchema>;

export const ShowProfileForm = () => {
  const nama = useUserStore.use.nama();
  const nik = useUserStore.use.nik();
  const noRm = useUserStore.use.noRm();

  const profileForm = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama,
      nik,
      noRm,
    },
    disabled: true,
  });

  return (
    <Form {...profileForm}>
      <form className="font-semibold">
        <FormField
          control={profileForm.control}
          name="nama"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="font-semibold">Nama</FormLabel>
              <FormControl>
                <Input
                  className="px-4 py-6 leading-10 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
                  placeholder="Nama Lengkap"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={profileForm.control}
          name="nik"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="font-semibold">NIK</FormLabel>
              <FormControl>
                <Input
                  className="px-4 py-6 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
                  placeholder="*305050xxxxxxxx"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={profileForm.control}
          name="noRm"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="font-semibold">No. RM</FormLabel>
              <FormControl>
                <Input
                  className="px-4 py-6 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
                  placeholder="*00.20.xx - 99.xx.xx"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
