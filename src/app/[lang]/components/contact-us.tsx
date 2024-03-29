"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NestedDictionary } from "@/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner"


export default function ContactUS({
  dictionary,
}: {
  dictionary: NestedDictionary;
}) {
  const contactText = dictionary["contactform"];
  const formSchema = z.object({
    email: z.string().email({ message: contactText["emailerror"] }),
    message: z.string().min(4, { message: contactText["messageerror"] }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit =  async (values: z.infer<typeof formSchema>) => {
    try {
        const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ email: values.email, message: values.message }) });
        if (response.ok) {
          toast.success(contactText["emailsent"]);
          form.reset();
        } else {
          // Handle errors
          toast.error(contactText["emailsenterror"]);
        }
      } catch (error) {
        // Handle errors
        toast.error(contactText["emailsenterror"]);
      }
  }


  return (
    <article className="flex justify-center">
      <Card className="md:w-1/2 w-11/12">
        <CardHeader>
          <CardTitle>{contactText["title"]}</CardTitle>
          <CardDescription>{contactText["subtitle"]}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              <section className="flex text-balance justify-between border px-3 py-2 rounded-md items-center">
                <div className="flex items-center">
                    <ChatBubbleIcon className="mr-4 w-6" />
                    <h3>{contactText["schedulemessage"]}</h3>
                </div>
                <Button type="button" size="sm" variant="secondary" className="rounded-full ml-4">
                  <Link href="https://calendly.com/yen21000/yus" target="blank">{contactText["schedulebutton"]}</Link>
                </Button>
              </section>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactText["formemail"]}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={contactText["formemailplaceholder"]}
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
                    <FormLabel>{contactText["formmessage"]} </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={contactText["formmessageplaceholder"]}
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit">{contactText["formbutton"]}</Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </article>
  );
}
