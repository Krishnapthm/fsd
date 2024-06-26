import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Parts {
  part: string;
  partName: string;
}

export const works: Parts[] = [
  {
    part: "Motherboard",
    partName:
      "https://dlcdnimgs.asus.com/websites/global/products/sqlhk1j3w9jgpcci/img/z490/kv/hero.png",
  },
  {
    part: "CPU",
    partName:
      "https://img.icons8.com/?size=100&id=12101&format=png&color=000000",
  },
  {
    part: "GPU",
    partName:
      "https://c4.wallpaperflare.com/wallpaper/427/1009/251/nvidia-nvidia-rtx-gpus-graphics-card-fans-hd-wallpaper-preview.jpg",
  },
  {
    part: "RAM",
    partName:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    part: "Storage",
    partName:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

function Home() {
  return (
    <div className='pt-20'>
      <ScrollArea className='w-[800px]  flex justify-center items-center whitespace-nowrap rounded-md border '>
        <div className='h-[550px] overflow-y'>
          <div className='flex flex-col space-y-4 p-4'>
            {works.map((part) => (
              <figure key={part.part} className='flex-shrink-0'>
                <div className='flex justify-between'>
                  <div className='overflow-hidden rounded-md flex justify-between'>
                    <img
                      src={part.partName}
                      alt={`Photo by ${part.part}`}
                      className='w-[180px] h-[180px] object-contain'
                    />
                  </div>

                  {/* <figcaption className='pt-2 text-xs text-muted-foreground'>
                    Photo by{" "}
                    <span className='font-semibold text-foreground'>
                      {part.part}
                    </span>
                  </figcaption> */}
                  <Button>Select {part.part}</Button>
                </div>
              </figure>
            ))}
          </div>

          <ScrollBar orientation='vertical' />
        </div>
      </ScrollArea>
    </div>
  );
}

export default Home;
