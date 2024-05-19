import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { VitalMonitor } from '@/features/misc';
import { useUserStore } from '@/stores/user';

import { AgeSelect } from '../components/AgeSelect';
import { ProfileForm } from '../components/ProfileForm';
import { formSchema } from '../types';
import type { TFormSchema } from '../types';

export const Home = () => {
  const setUserInfo = useUserStore.use.setUserInfo();

  const navigate = useNavigate();

  const profileForm = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: '',
      nik: '',
      noRm: '',
    },
  });

  function onSubmit({ nama, nik, noRm }: TFormSchema) {
    setUserInfo({
      nama,
      nik,
      noRm,
    });

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

          <AgeSelect />
        </div>

        <div>
          <h1 className="mt-14 max-w-[200px] text-3xl font-semibold leading-none md:mt-0">
            Monitoring Tanda Vital
          </h1>

          <VitalMonitor />
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
