import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import { ProfileForm } from '../components/ProfileForm';
import { VitalMonitoring } from '../components/VitalMonitoring';
import { formSchema } from '../types';
import type { TFormSchema } from '../types';

const AgeRangeForm = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(['7 - 12', '13 - 30', '31 - 36', '>55'] as const).map((range, i) => (
        <Button key={i} className="bg-[#1939D2] py-8 text-base font-semibold hover:bg-[#112FBD]">
          {range} tahun
        </Button>
      ))}
    </div>
  );
};

export const Home = () => {
  const navigate = useNavigate();

  const profileForm = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      nik: '',
      ttl: '',
      noRm: '',
    },
  });

  function onSubmit(values: TFormSchema) {
    console.log('form submitted');
    console.log({
      ...values,
    });

    // TODO: set store value

    navigate('/symptom');
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        <div>
          <h1 className="text-3xl font-semibold">Identitas Diri</h1>

          <div className="lg:mt-6">
            <ProfileForm {...profileForm} />
          </div>
        </div>

        <div>
          <h1 className="mt-14 max-w-[200px] text-3xl font-semibold leading-none md:mt-0">
            Pilih Rentang Usia Anda!
          </h1>

          <AgeRangeForm />
        </div>

        <div>
          <h1 className="mt-14 max-w-[200px] text-3xl font-semibold leading-none md:mt-0">
            Monitoring Tanda Vital
          </h1>

          <VitalMonitoring />
        </div>
      </div>

      <div className="justify-center lg:flex">
        <Button
          onClick={profileForm.handleSubmit(onSubmit)}
          className="text-md mt-16 w-full bg-[#1939D2] py-7 font-semibold hover:bg-[#112FBD] lg:w-fit lg:px-32"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};
