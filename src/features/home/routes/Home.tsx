import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";

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
      nama: "",
      nik: "",
      ttl: "",
      noRm: "",
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
            ["nama", "Nama", "Nama Lengkap"],
            ["nik", "NIK", "*305050xxxxxxxx"],
            ["ttl", "TTL", "Surabaya, 30 Februari 1943"],
            ["noRm", "No. RM", "*00.20.xx - 99.xx.xx"],
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

const AgeRangeForm = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(["7 - 12", "13 - 30", "31 - 36", ">55"] as const).map((range, i) => (
        <Button
          key={i}
          className="py-8 font-semibold text-base bg-[#1939D2] hover:bg-[#112FBD]"
        >
          {range} tahun
        </Button>
      ))}
    </div>
  );
};

const VitalMonitoring = () => {
  return (
    <div className="mt-7 grid grid-cols-2 gap-2">
      {(["Suhu", "Denyut Nadi", "Tekanan Darah"] as const).map((label) => (
        <div
          key={label}
          className="p-3 flex justify-between items-center font-medium rounded-md bg-[#1939D2]"
        >
          <div className="text-white text-xs leading-3 max-w-[40px]">
            {label}
          </div>
          <div className="px-4 py-2 bg-white rounded-md flex justify-center items-center">
            <div>200</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        <div>
          <h1 className="font-semibold text-3xl">Identitas Diri</h1>

          <div className="lg:mt-6">
            <ProfileForm />
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-3xl max-w-[200px] leading-none mt-14 md:mt-0">
            Pilih Rentang Usia Anda!
          </h1>

          <AgeRangeForm />
        </div>

        <div>
          <h1 className="font-semibold text-3xl max-w-[200px] leading-none mt-14 md:mt-0">
            Monitoring Tanda Vital
          </h1>

          <VitalMonitoring />
        </div>
      </div>

      <div className="lg:flex justify-center">
        <Link to="/symptom">
          <Button className="mt-16 py-7 lg:px-32 w-full lg:w-fit font-semibold text-md bg-[#1939D2] hover:bg-[#112FBD]">
            Selanjutnya
          </Button>
        </Link>
      </div>
    </div>
  );
};
