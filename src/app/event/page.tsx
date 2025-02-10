import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col bg-neutral-300">
      <div className="relative h-80 w-full rounded-b-[5rem] bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-blue-800">
        <div className="flex w-full flex-col gap-4 px-4 pt-24">
          <h1 className="text-3xl font-semibold">Hallo, Selamat Datang!</h1>
          <p className="text-muted-foreground">
            Berikut adalah daftar acara yang telah sukses diselenggarakan serta
            event menarik yang akan segera berlangsung. Jangan lewatkan
            kesempatan untuk ikut serta dan menjadi bagian dari momen spesial
            bersama kami!
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-10 py-24">
        <Tabs defaultValue="newevent" className="w-full px-2">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="allevent">Semua Event</TabsTrigger>
            <TabsTrigger value="newevent">Event Terbaru</TabsTrigger>
          </TabsList>
          <TabsContent
            value="allevent"
            className="flex w-full flex-col gap-5 px-4 pt-10"
          >
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Perayaan HUT RI ke-79</h1>
                  <p className="text-muted-foreground">17 Agustus 2024</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Voli Antar Dusun (PORDUS)</h1>
                  <p className="text-muted-foreground">17 Oktober 2023</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Perayaan HUT RI ke-78</h1>
                  <p className="text-muted-foreground">17 agustus 2023</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Perayaan HUT RI ke-78</h1>
                  <p className="text-muted-foreground">17 agustus 2023</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="newevent"
            className="flex w-full flex-col gap-5 px-4 pt-10"
          >
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Perayaan HUT RI ke-80</h1>
                  <p className="text-muted-foreground">17 Agustus 2025</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="border-l-4 border-blue-500">
                <div className="pl-4">
                  <h1>Voli antar RT</h1>
                  <p className="text-muted-foreground">5 Agustus 2025</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
