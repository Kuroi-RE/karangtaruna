import { ArrowUpRight, Volleyball } from "lucide-react";
import React from "react";
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
  AlertDialogAction,
} from "~/components/ui/alert-dialog";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import SplitText from "~/components/SplitText";
const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

type DataActivity = {
  title: string;
  description: string;
  image: Array<string>;
}[];

const DataActivity: DataActivity = [
  {
    title: "17 Agustus 2023",
    description:
      "Perayaan ulang tahun republik indonesia ke-73. Dalam perayaan tersebut karang taruna mekar mengajak semua element untuk bergabung dalam keseruannya. Maka dari itu Karang Taruna Mekar Jadi mengadakan lomba lomba yang seru dan menarik, untuk semua kalangan",
    image: [
      "/images/kegiatan1/1.jpg",
      "/images/kegiatan1/2.jpg",
      "/images/kegiatan1/3.jpg",
    ],
  },
  {
    title: "Voli Antar Dusun 2024",
    description:
      "Voli antar dusun Kwadungan yang sukses diselenggarakan oleh Karang Taruna Mekar Jadi Domas, Voli ini mempertemukan semua team dusun Kwadungan, Putri dan Putra. ",
    image: [
      "/images/kegiatan2/1.jpg",
      "/images/kegiatan2/2.jpg",
      "/images/kegiatan2/3.jpg",
    ],
  },
  {
    title: "17 Agustus 2024",
    description:
      "Perayaan ulang tahun republik indonesia ke-74. Dalam perayaan yang selalu hadir setiap tahunnya, dengan moment yang tepat kami menyelanggarakan panggung bagi para warga domas. Dalam acara ini kami mengundang element warga untuk turut memberikan penampilan yang menarik.",
    image: [
      "/images/kegiatan1/1.jpg",
      "/images/kegiatan1/2.jpg",
      "/images/kegiatan1/3.jpg",
    ],
  },
];

// Motion Variants
const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay } },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// const slideImage = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

const Activity = () => {
  const [current, setCurrent] = React.useState(0);
  const { toast } = useToast();

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section
      id="kegiatan"
      className="flex min-h-[50vh] w-full flex-col bg-blueSea-foreground text-black dark:bg-[#1a3b52] dark:text-white"
    >
      <div className="flex flex-col place-items-center gap-4 py-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full py-24 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm text-muted-foreground dark:text-blueSea-mute md:text-xl"
          >
            apa yang kita lakukan?
          </motion.span>
          {/* <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
            Kegiatan yang terlaksana
          </h1> */}
          <h1>
            <SplitText
              text="Kegiatan yang terlaksana"
              className="text-xl font-bold md:text-3xl lg:text-4xl"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              // easing={""}
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center"
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
              <AlertDialogContent className="h-full w-full bg-blueSea-mute dark:bg-[#03346E] md:flex md:flex-col md:gap-20">
                <AlertDialogHeader className="gap-10 md:flex md:flex-col md:gap-14">
                  <div>
                    <AlertDialogTitle>{data.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {data.description}
                    </AlertDialogDescription>
                  </div>
                  <div className="relative mt-4 flex h-96 w-full flex-col items-center md:h-[27rem] md:justify-center lg:h-[20rem]">
                    {data.image.map((src, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                          opacity: index === current ? 1 : 0,
                          x: index === current ? 0 : -50,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`inset-0 flex w-full items-center justify-center ${
                          index === current ? "block" : "hidden"
                        }`}
                      >
                        <Image
                          height={100}
                          width={250}
                          src={src}
                          alt={`Slide-${index}`}
                          className="h-80 object-cover md:h-[26rem] md:w-80"
                        />
                      </motion.div>
                    ))}

                    {/* Tombol Prev & Next Berada di Bawah Gambar */}
                    <div className="mt-4 flex gap-4">
                      <button
                        onClick={prevSlide}
                        className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:transform"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:transform"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-primary text-primary dark:border-background dark:text-white">
                    Close
                  </AlertDialogCancel>

                  <Button
                    onClick={() => {
                      toast({
                        description: "Fitur belum tersedia.",
                      });
                    }}
                    className="border-primary text-black dark:border-background dark:text-white"
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
