import React from "react";
import { type Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import JsonLd from "~/components/JsonLd";
import { eventSchema, breadcrumbSchema, type EventInput } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Berita & Event",
  description:
    "Daftar acara dan kegiatan Karang Taruna Mekar Jadi Dusun Domas — event yang telah terselenggara maupun yang akan datang.",
  alternates: { canonical: "/event" },
};

type EventItem = EventInput & { dateLabel: string };

const pastEvents: EventItem[] = [
  { name: "Perayaan HUT RI ke-79", startDate: "2024-08-17", dateLabel: "17 Agustus 2024", status: "completed" },
  { name: "Voli Antar Dusun (PORDUS)", startDate: "2023-10-17", dateLabel: "17 Oktober 2023", status: "completed" },
  { name: "Perayaan HUT RI ke-78", startDate: "2023-08-17", dateLabel: "17 Agustus 2023", status: "completed" },
];

const upcomingEvents: EventItem[] = [
  { name: "Perayaan HUT RI ke-80", startDate: "2025-08-17", dateLabel: "17 Agustus 2025", status: "scheduled" },
  { name: "Voli antar RT", startDate: "2025-08-05", dateLabel: "5 Agustus 2025", status: "scheduled" },
];

const EventCard = ({ name, dateLabel }: EventItem) => (
  <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
    <div className="border-l-4 border-merah">
      <div className="pl-4">
        <h2 className="font-display font-semibold">{name}</h2>
        <p className="text-muted-foreground">{dateLabel}</p>
      </div>
    </div>
  </div>
);

const EventPage = () => {
  const allEvents = [...upcomingEvents, ...pastEvents];

  return (
    <section className="flex min-h-screen flex-col bg-neutral-300 dark:bg-slate-900">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Berita & Event", path: "/event" },
          ]),
          ...allEvents.map((e) => eventSchema(e)),
        ]}
      />
      <div className="relative h-80 w-full rounded-b-[5rem] bg-gradient-to-r from-primary via-blueSea to-merah dark:from-primary dark:to-blue-800">
        <div className="flex w-full flex-col gap-4 px-4 pt-24">
          <h1 className="font-display text-3xl font-semibold">
            Hallo, Selamat Datang!
          </h1>
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
            {pastEvents.map((e) => (
              <EventCard key={e.name} {...e} />
            ))}
          </TabsContent>
          <TabsContent
            value="newevent"
            className="flex w-full flex-col gap-5 px-4 pt-10"
          >
            {upcomingEvents.map((e) => (
              <EventCard key={e.name} {...e} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EventPage;
