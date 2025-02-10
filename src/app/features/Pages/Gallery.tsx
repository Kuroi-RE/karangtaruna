import Image from "next/image";
import React from "react";
import ParticleBackground from "~/components/ParticleBackground";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import SplitText from "~/components/SplitText";

const images1 = [
  "/images/172023/1.jpg",
  "/images/172023/5.jpg",
  "/images/172023/3.jpg",
];

const images2 = [
  "/images/172024/1.jpg",
  "/images/172024/2.jpg",
  "/images/172024/3.jpg",
];

const images3 = [
  "/images/172024/5.jpg",
  "/images/172024/6.jpg",
  "/images/172024/7.jpg",
  "/images/172024/8.jpg",
];

const getRandomSize = () => Math.floor(Math.random() * 101) + 300;

const Gallery = () => {
  const { toast } = useToast();

  return (
    <section
      id="gallery"
      className="relative flex min-h-screen flex-col items-center p-6 py-24"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <ParticleBackground type="cobweb" />
      </div>
      <div>
        <div className="self- relative mb-6 w-36">
          {/* <h1 className="text-3xl font-bold text-blue-500">GALLERY</h1> */}
          <SplitText
            text="GALLERY"
            className="text-center text-3xl font-bold text-blue-500"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            // easing={""}
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* Masonry Grid */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            {images1.map((src, index) => {
              const randomWidth = getRandomSize();
              const randomHeight = getRandomSize();
              return (
                <div key={index} className="flex flex-col gap-4">
                  <Image
                    src={src}
                    width={randomWidth}
                    height={randomHeight}
                    alt={`gallery-${index}`}
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            {images2.map((src, index) => {
              const randomWidth = getRandomSize();
              const randomHeight = getRandomSize();
              return (
                <div key={index} className="flex flex-col gap-4">
                  <Image
                    src={src}
                    width={randomWidth}
                    height={randomHeight}
                    alt={`gallery-${index}`}
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              );
            })}
          </div>
          <div className="hidden gap-4 md:flex md:flex-col">
            {images3.map((src, index) => {
              // const randomWidth = getRandomSize();
              const randomHeight = getRandomSize();
              return (
                <div key={index} className="flex flex-col gap-4">
                  <Image
                    src={src}
                    width={400}
                    height={randomHeight}
                    alt={`gallery-${index}`}
                    className="rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="mt-4 rounded-md bg-primary px-4 py-2 text-white dark:bg-blue-900">
                Lihat Dokumentasi [Google Drive]
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Dokumentasi [Kartar]</AlertDialogTitle>
                <AlertDialogDescription>
                  Dokumentasi Kartar yang tersimpan di Google Drive, silahkan
                  pilih dokumentasi sesuai dengan kegiatan yang ingin dilihat.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex gap-4 md:flex-col">
                <AlertDialogAction
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1Pa9sEVVXzremmmWOY7pjAO-vOYdBLL_3?usp=drive_link",
                    )
                  }
                >
                  17 Agustus 2023
                </AlertDialogAction>
                <AlertDialogAction
                  onClick={() => {
                    toast({
                      description: "Dokumentasi Tidak Tersedia.",
                    });
                  }}
                >
                  Voli Antar Dusun 2024
                </AlertDialogAction>
                <AlertDialogAction
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1KE-lf1L611O1cWn-EdZ2axpW-hGmeoFV?usp=sharing",
                    )
                  }
                >
                  17 Agustus 2024
                </AlertDialogAction>
                <AlertDialogCancel className="border-red-600">
                  Tutup
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
