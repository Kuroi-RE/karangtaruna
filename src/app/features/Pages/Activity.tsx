import { ArrowUpRight, Volleyball } from "lucide-react";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import SplitText from "~/components/SplitText";

type DataActivityType = {
  title: string;
  description: string;
  images: string[];
}[];

const DataActivity: DataActivityType = [
  {
    title: "17 Agustus 2023",
    description:
      "Dalam rangka merayakan HUT ke-73 Republik Indonesia, Karang Taruna Mekar Jadi mengajak seluruh elemen masyarakat untuk turut serta dalam kemeriahan acara. Untuk memeriahkan perayaan ini, kami mengadakan berbagai lomba yang seru dan menarik, yang dapat diikuti oleh semua kalangan.",
    images: [
      "/images/172023/1.jpg",
      "/images/172023/2.jpg",
      "/images/172023/3.jpg",
      "/images/172023/4.jpg",
      "/images/172023/5.jpg",
    ],
  },
  {
    title: "Voli Antar Dusun 2024",
    description:
      "Turnamen voli antar dusun Kwadungan yang sukses diselenggarakan oleh Karang Taruna Mekar Jadi Domas menjadi ajang kebersamaan dan sportivitas.",
    images: ["/images/172024/1.jpg", "/images/172024/2.jpg"],
  },
  {
    title: "17 Agustus 2024",
    description:
      "Perayaan ulang tahun ke-74 Republik Indonesia menjadi momen spesial yang selalu dinantikan setiap tahunnya.",
    images: [
      "/images/172024/1.jpg",
      "/images/172024/2.jpg",
      "/images/172024/3.jpg",
      "/images/172024/4.jpg",
      "/images/172024/5.jpg",
      "/images/172024/6.jpg",
      "/images/172024/7.jpg",
      "/images/172024/8.jpg",
      "/images/172024/9.jpg",
      "/images/172024/10.jpg",
      "/images/172024/11.jpg",
    ],
  },
];

// Motion Variants
const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const fadeInUp = (delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay } },
});

const Activity = () => {
  const { toast } = useToast();
  const [currentSlides, setCurrentSlides] = useState<Record<number, number>>(
    {},
  );

  const nextSlide = (activityIndex: number, imagesLength: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activityIndex]:
        (prev[activityIndex] ?? 0) === imagesLength - 1
          ? 0
          : (prev[activityIndex] ?? 0) + 1,
    }));
  };

  const prevSlide = (activityIndex: number, imagesLength: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [activityIndex]:
        (prev[activityIndex] ?? 0) === 0
          ? imagesLength - 1
          : (prev[activityIndex] ?? 0) - 1,
    }));
  };

  return (
    <section
      id="kegiatan"
      className="flex min-h-[60vh] w-full flex-col bg-blueSea-foreground text-black dark:bg-[#1a3b52] dark:text-white"
    >
      <div className="flex flex-col place-items-center gap-4 py-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-24 text-center"
        >
          <motion.span
            variants={fadeInUp(0.9)}
            className="text-sm text-muted-foreground dark:text-blueSea-mute md:text-xl"
          >
            Apa yang kita lakukan?
          </motion.span>
          <motion.h1 variants={fadeInUp(0.9)}>
            <SplitText
              text="Kegiatan yang terlaksana"
              className="text-xl font-bold md:text-3xl lg:text-4xl"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4 pb-24 md:flex-row md:flex-wrap md:justify-center"
        >
          {DataActivity.map((data, index) => (
            <AlertDialog key={index}>
              <AlertDialogTrigger asChild>
                <motion.div variants={fadeIn(index * 0.2)}>
                  <Card className="flex w-[300px] flex-col gap-12 border-none bg-blueSea-mute dark:bg-[#03346E]">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>
                        <Volleyball size={35} />
                      </CardTitle>
                      <CardDescription>
                        <ArrowUpRight size={30} />
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <h1 className="font-semibold">{data.title}</h1>
                      <p className="line-clamp-3 text-muted-foreground">
                        {data.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AlertDialogTrigger>

              <AlertDialogContent className="bg-blueSea-mute dark:bg-[#03346E]">
                <AlertDialogHeader>
                  <AlertDialogTitle>{data.title}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {data.description}
                  </AlertDialogDescription>

                  <div className="relative flex flex-col items-center justify-center">
                    <Image
                      src={
                        data.images[currentSlides[index] ?? 0] ??
                        "/images/172023/1.jpg"
                      }
                      width={250}
                      height={100}
                      alt="Activity Image"
                      className="h-80 object-cover"
                    />

                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={() => prevSlide(index, data.images.length)}
                        className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:transform lg:left-5"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => prevSlide(index, data.images.length)}
                        className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:transform lg:right-5"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <Button
                    onClick={() =>
                      toast({ description: "Fitur belum tersedia." })
                    }
                  >
                    Lihat Blog
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activity;
