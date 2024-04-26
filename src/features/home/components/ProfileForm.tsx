import type { UseFormReturn } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { TFormSchema } from '../types';

export const ProfileForm = (profileForm: UseFormReturn<TFormSchema, any, undefined>) => {
  return (
    <Form {...profileForm}>
      <form>
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
            control={profileForm.control}
            name={name}
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel className="font-semibold">{label}</FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-6 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
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
