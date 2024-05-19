import type { UseFormReturn } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { TFormSchema } from '../types';

export const ProfileForm = (profileForm: UseFormReturn<TFormSchema, any, undefined>) => {
  return (
    <Form {...profileForm}>
      <form>
        <FormField
          control={profileForm.control}
          name="nama"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel className="font-semibold">Nama</FormLabel>
              <FormControl>
                <Input
                  className="px-4 py-6 outline outline-2 outline-blue-500 placeholder:text-[#898989]"
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
