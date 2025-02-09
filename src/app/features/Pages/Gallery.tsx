import Image from "next/image";
import React from "react";

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

const images = [
  "/images/kegiatan1/1.jpg",
  "/images/kegiatan1/2.jpg",
  "/images/kegiatan1/3.jpg",
  "/images/kegiatan2/1.jpg",
  "/images/kegiatan2/2.jpg",
  "/images/kegiatan2/3.jpg",
];

import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";

const Gallery = () => {
  const { toast } = useToast();

  return (
    <section
      id="gallery"
      className="flex min-h-screen flex-col items-center p-6 py-24"
    >
      <div>
        <div className="self- relative mb-6 w-36">
          <h1 className="text-3xl font-bold text-blue-500">GALLERY</h1>
        </div>

        {/* Masonry Grid */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/kegiatan1/1.jpg"
              width={300}
              height={400}
              alt="gallery-1"
              className="h-[300px] w-[300px] rounded-lg object-cover"
            />
            <Image
              src="/images/kegiatan1/2.jpg"
              width={300}
              height={200}
              alt="gallery-2"
              className="h-[200px] w-[300px] rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Image
              src="/images/kegiatan1/3.jpg"
              width={300}
              height={200}
              alt="gallery-3"
              className="h-[200px] w-[300px] rounded-lg object-cover"
            />
            <Image
              src="/images/kegiatan1/1.jpg"
              width={300}
              height={400}
              alt="gallery-4"
              className="h-[300px] w-[300px] rounded-lg object-cover"
            />
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
              <AlertDialogFooter className="flex gap-4">
                <AlertDialogCancel>Tutup</AlertDialogCancel>
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
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
