import React from "react";

type MisiItem = {
  id: string;
  title: string;
  description: string;
};

const misiList: MisiItem[] = [
  {
    id: "01",
    title: "Memberdayakan Pemuda",
    description:
      "Meningkatkan peran aktif pemuda dalam pembangunan dan kesejahteraan masyarakat Dusun Domas.",
  },
  {
    id: "02",
    title: "Meningkatkan Kreativitas",
    description:
      "Mendukung berbagai kegiatan inovatif dan kreatif untuk meningkatkan keterampilan pemuda.",
  },
  {
    id: "03",
    title: "Mempererat Solidaritas",
    description:
      "Membangun kebersamaan dan gotong royong di antara anggota Karang Taruna dan masyarakat.",
  },
];

const Misi: React.FC = () => {
  return (
    <div className="mx-auto grid w-full place-items-end gap-8">
      {misiList.map((item) => (
        <div
          key={item.id}
          className="flex max-w-prose items-center gap-10 border-l-4 border-blue-500 pl-6"
        >
          <div className="text-xs font-semibold text-gray-400 md:text-lg">{` ${item.id} `}</div>
          <div className="pt-5">
            <h3 className="text-start text-sm font-bold md:text-xl">
              {item.title}
            </h3>
            <p className="text-start text-sm text-gray-300 md:text-xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Misi;
