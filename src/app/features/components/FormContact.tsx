"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
// import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.string().min(2, {
    message: "Email is required",
  }),
  phone: z.number().min(10, {
    message: "Phone number is not valid",
  }),
  message: z.string().min(2, {
    message: "Message is required",
  }),
});

const FormContact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h1 className="text-center text-3xl font-semibold">Hubungi kami</h1>
            <FormDescription className="text-center">
              kamu bisa hubungi kami kapan saja.
            </FormDescription>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-blue-300 dark:text-white"
                    placeholder="adestra"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-blue-300 dark:text-white"
                    type="email"
                    placeholder="kartar@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No. Handphone</FormLabel>
                <FormControl>
                  <Input
                    className="dark:bg-blue-300 dark:text-white"
                    type="number"
                    placeholder="08157692382"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pesan</FormLabel>
                <FormControl className="grid w-full gap-1.5">
                  <Textarea
                    className="dark:bg-blue-300"
                    placeholder="Tulis pesan disini..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
