import React from "react";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="from-blueSea via-blueSea-foreground to-blueSea-mute flex w-[95vw] flex-col justify-evenly gap-10 rounded-lg bg-gradient-to-tr py-10 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 md:h-[547px] md:flex-row md:items-center md:justify-between md:gap-20 md:px-24">
        <div className="relative flex flex-col gap-4 px-4 md:px-0">
          <div className="flex flex-col gap-2 md:w-[600px] md:gap-4">
            <div className="md:max-w-[80%]">
              <h1 className="text-4xl text-black dark:text-white md:text-6xl">
                Karang Taruna <span className="text-red-500">Mekar Jadi</span>
              </h1>
              <svg
                className="absolute top-16 md:top-28 md:w-96"
                width="200"
                height="22"
                viewBox="0 0 486 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M325.017 12.5942C378.627 14.5964 432.419 19.3492 484.182 30.8908C485.105 31.0961 485.485 31.4304 485.559 31.5063C485.997 31.9558 486.039 32.413 485.978 32.7849C485.941 33.0107 485.701 33.9603 484.457 33.9994C483.597 34.0247 477.511 33.262 475.162 33.028C464.104 31.9285 453.071 30.5892 442.045 29.1245C417.046 25.8116 392.077 22.7839 367.033 19.916C352.972 18.3046 338.904 16.8533 324.842 15.5417C290.988 14.283 257.203 14.1227 224.049 14.0411C237.209 15.451 249.299 16.8199 259.326 17.8133C276.235 19.4874 293.111 21.3153 309.98 23.4641C318.647 24.5658 327.302 25.7258 335.95 27.0194C336.908 27.1648 339.091 27.372 340.147 27.5435C340.596 27.6135 340.92 27.7068 341.065 27.7673C341.974 28.1488 342.08 28.8446 342.087 29.1931C342.09 29.4048 341.999 30.5544 340.453 30.7046C268.577 37.7855 193.902 21.8967 121.771 28.6707C120.925 28.7504 120.142 28.1555 120.026 27.3414C119.911 26.5299 120.504 25.8034 121.352 25.7239C189.288 19.3441 259.481 33.0697 327.474 28.7707C321.549 27.9352 315.62 27.1533 309.685 26.3979C292.847 24.2532 276.002 22.4296 259.121 20.7568C242.134 19.0763 219.177 16.2878 195.137 14.0681C174.48 14.1675 153.832 14.4012 133.172 14.4469C124.457 14.4647 115.739 14.4075 107.026 14.4335C103.444 14.4425 94.2248 14.76 92.8939 14.4118C91.8586 14.1395 91.6185 13.4184 91.5614 13.0595C91.5026 12.6711 91.5479 12.1939 92.0257 11.7592C92.1735 11.6217 92.6152 11.3432 93.5161 11.1404C117.883 5.68038 157.635 7.70624 194.846 11.1087C202.86 11.0676 210.874 11.048 218.891 11.0686C237.241 11.1122 255.794 11.1628 274.452 11.3979C221.915 7.61879 169.331 5.43331 116.727 3.78765C94.6396 3.09762 35.088 2.49518 11.6187 3.37166C11.9011 3.66647 12.0641 4.06526 12.0388 4.48978C11.9886 5.30134 11.2536 5.89775 10.3986 5.81892C5.56548 5.37111 2.77243 4.963 1.66821 4.62846C0.980442 4.42119 0.608339 4.12474 0.436844 3.93435C0.0163761 3.47491 -0.0558464 3.00015 0.0342692 2.55734C0.0913341 2.28163 0.227194 1.98295 0.533897 1.71663C0.738436 1.53372 1.23611 1.26326 2.08029 1.10324C11.3243 -0.637546 90.4119 0.00680473 116.71 0.828092C186.205 3.00364 255.66 6.11977 325.017 12.5942ZM112.318 11.4654C125.918 10.3636 141.843 10.5148 158.445 11.3575C149.981 11.417 141.515 11.4656 133.046 11.4847C126.139 11.5016 119.228 11.4674 112.318 11.4654ZM389 19.5078C406.795 21.6211 424.57 23.8351 442.357 26.1942C444.41 26.4648 446.462 26.7326 448.515 26.998C428.855 23.7449 408.978 21.3195 389 19.5078Z"
                  fill="#686764"
                />
              </svg>
            </div>

            <p className="max-w-60 text-sm text-zinc-500 md:max-w-80">
              Karang Taruna Mekar jadi adalah organisasi pemuda-pemudi dusun
              domas, dengan adanya organisasi ini diharapkan dapat membantu
              kemajuan dari dusun domas melalui pemikiran para muda-mudi.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="default" className="bg-blueSea dark:bg-background">
              Kenal Kami
            </Button>
            <Button variant="default" className="bg-blueSea dark:bg-background">
              Hubungi Kami
            </Button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center px-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d751.9344309573312!2d111.0553087895999!3d-7.533345466033228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1738957390862!5m2!1sid!2sid"
            loading="lazy"
            className="h-[400px] w-[270px] rounded-md md:h-[350px] md:w-[600px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
