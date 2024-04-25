import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import z from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// TODO: FIX Schema
const formSchema = z.object({
  nama: z.string().min(3),
  nik: z.string().min(10),
  ttl: z.string(),
  noRm: z.string(),
});

const ProfileForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      nik: '',
      ttl: '',
      noRm: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {(
          [
            ['nama', 'Nama', 'Nama Lengkap'],
            ['nik', 'NIK', '*305050xxxxxxxx'],
            ['ttl', 'TTL', 'Surabaya, 30 Februari 1943'],
            ['noRm', 'No. RM', '*00.20.xx - 99.xx.xx'],
          ] as const
        ).map(([name, label, placeholder]) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="font-semibold">{label}</FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-6 outline outline-2 outline-[#1939D2] placeholder:text-[#898989]"
                    placeholder={placeholder}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
};

const VitalMonitoring = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(['Suhu', 'Denyut Nadi', 'Tekanan Darah'] as const).map((label) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md bg-[#1939D2] p-3 font-medium"
        >
          <div className="max-w-[40px] text-xs leading-3 text-white">{label}</div>
          <div className="flex items-center justify-center rounded-md bg-white px-4 py-2">
            <div>200</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Diagnosis = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center">
        <Link to="/symptom">
          <ChevronLeft className="absolute inset-x-0 inset-y-1/3" />
        </Link>
        <h1 className="max-w-[250px] text-center text-3xl font-semibold leading-none">
          Hasil Diagnosa Anda
        </h1>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-8">
        <div>
          <h1 className="mt-14 text-2xl font-semibold leading-none">Monitoring Tanda Vital</h1>

          <div className="lg:mt-14">
            <VitalMonitoring />
          </div>
        </div>

        <div>
          <h1 className="mt-14 text-3xl font-semibold">Identitas Diri</h1>

          <ProfileForm />
        </div>
      </div>

      <div className="md:flex md:justify-center">
        <div className="mt-14 font-semibold md:flex md:min-w-[400px] md:flex-col md:justify-center">
          <div>
            <h2>Diagnosa Penyakit</h2>
            <div className="mt-2 rounded-md bg-[#1939D2] py-4 text-center text-sm text-white">
              Tekanan Darah Tinggi (HIPERTENSI)
            </div>
          </div>
          <div className="mt-2">
            <h2>Tingkat Keparahan</h2>
            <div className="mt-2 rounded-md bg-[#1939D2] py-4 text-center text-sm text-white">
              Kronis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
