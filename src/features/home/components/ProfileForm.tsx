import type { UseFormReturn } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

        <div className="mt-4">
          <FormLabel className="font-semibold">TTL</FormLabel>
          <div className="mt-2 flex items-center space-x-4">
            <FormField
              control={profileForm.control}
              name="tempatLahir"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="px-4 py-6 outline outline-2 outline-blue-500">
                        <SelectValue placeholder="Pilih Kota" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="surabaya">Surabaya</SelectItem>
                      <SelectItem value="malang">Malang</SelectItem>
                      <SelectItem value="bali">Bali</SelectItem>
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
