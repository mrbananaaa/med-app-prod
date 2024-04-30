import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUserStore } from '@/stores/user';
import { KOTA_ID } from '@/test/kota';

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
  const ttl = useUserStore.use.ttl();
  const noRm = useUserStore.use.noRm();

  const profileForm = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama,
      nik,
      tempatLahir: ttl.kota,
      tanggalLahir: `${ttl.tahun}-${ttl.bulan}-${ttl.tanggal}`,
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

        <div className="mt-4">
          <FormLabel className="font-semibold">TTL</FormLabel>
          <div className="mt-2 flex items-center space-x-4">
            <FormField
              control={profileForm.control}
              name="tempatLahir"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Select disabled onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="px-4 py-6 outline outline-2 outline-blue-500">
                        <SelectValue placeholder="Pilih Kota" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(KOTA_ID).map(([province, cities]) => (
                        <SelectGroup key={province}>
                          <>
                            <SelectLabel>{province}</SelectLabel>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </>
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="tanggalLahir"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="px-4 py-6 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
                      type="date"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

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
