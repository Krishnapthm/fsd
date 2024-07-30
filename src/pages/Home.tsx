import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface Parts {
  part: string;
  partName: string;
}

export interface BrandSpec {
  brand: string;
  spec: string;
  price: number;
}

export const works: Parts[] = [
  {
    part: "Motherboard",
    partName: "https://m.media-amazon.com/images/I/81LeNxQOZ8L._AC_UY218_.jpg",
  },
  {
    part: "CPU",
    partName: "https://m.media-amazon.com/images/I/61SNsBeIZEL._AC_UY218_.jpg",
  },
  {
    part: "GPU",
    partName: "https://m.media-amazon.com/images/I/816hhOe0gVL._SX679_.jpg",
  },
  {
    part: "RAM",
    partName: "https://m.media-amazon.com/images/I/61m8xvVXvvL._AC_UY218_.jpg",
  },
  {
    part: "Storage",
    partName: "https://m.media-amazon.com/images/I/614rFGMUwTL._AC_UY218_.jpg",
  },
];

export const brandSpecs: { [key: string]: BrandSpec[] } = {
  Motherboard: [
    { brand: "ASUS", spec: "ATX", price: 150 },
    { brand: "MSI", spec: "Micro-ATX", price: 120 },
  ],
  CPU: [
    { brand: "Intel", spec: "i7", price: 300 },
    { brand: "AMD", spec: "Ryzen 7", price: 280 },
  ],
  GPU: [
    { brand: "NVIDIA", spec: "RTX 3070", price: 500 },
    { brand: "AMD", spec: "RX 6800", price: 480 },
  ],
  RAM: [
    { brand: "Corsair", spec: "16GB DDR4", price: 80 },
    { brand: "G.Skill", spec: "32GB DDR4", price: 150 },
  ],
  Storage: [
    { brand: "Samsung", spec: "1TB SSD", price: 100 },
    { brand: "WD", spec: "2TB HDD", price: 70 },
  ],
};

function Home() {
  const [selectedPart, setSelectedPart] = useState<Parts | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<
    {
      part: string;
      brand: string;
      spec: string;
      price: number;
      quantity: number;
    }[]
  >([]);

  const handleSelectPart = (part: Parts) => {
    setSelectedPart(part);
  };

  const handleAddToCart = (brandSpec: BrandSpec) => {
    if (selectedPart) {
      setCart([...cart, { ...brandSpec, part: selectedPart.part, quantity }]);
      setSelectedPart(null);
      setQuantity(1);
    }
  };

  return (
    <div className='pt-20'>
      {selectedPart && (
        <div className='mb-4 p-4 border rounded-md'>
          <h2 className='text-xl font-semibold'>
            Select Brand and Specification for: {selectedPart.part}
          </h2>
          <div className='flex flex-col space-y-4'>
            {brandSpecs[selectedPart.part].map((brandSpec, index) => (
              <div key={index} className='flex justify-between items-center'>
                <div>
                  <p>Brand: {brandSpec.brand}</p>
                  <p>Specification: {brandSpec.spec}</p>
                  <p>Price: ${brandSpec.price}</p>
                </div>
                <div className='flex items-center'>
                  <Input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className='w-20 mr-2'
                    min='1'
                  />
                  <Button onClick={() => handleAddToCart(brandSpec)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ScrollArea className='w-[800px] flex justify-center items-center whitespace-nowrap rounded-md border'>
        <div className='h-[550px] overflow-y'>
          <div className='flex flex-col space-y-4 p-4'>
            {works.map((part) => (
              <figure
                key={part.part}
                className='flex-shrink-0 border rounded-md items-center'
              >
                <div className='flex justify-between items-center p-8'>
                  <div className='overflow-hidden rounded-md flex justify-between'>
                    <img
                      src={part.partName}
                      alt={`Photo by ${part.part}`}
                      className='w-[180px] h-[180px] object-contain'
                    />
                  </div>
                  <div className=''>
                    <Dialog>
                      <DialogTrigger>
                        <Button>Select {part.part}</Button>
                      </DialogTrigger>
                      <DialogContent className=''>
                        <DialogHeader>
                          <DialogTitle>
                            <h2>Select {part.part}</h2>
                          </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className='w-auto flex justify-center items-center whitespace-nowrap rounded-md border'>
                          <div className='h-[550px] overflow-y'>
                            <div className='flex flex-col space-y-4 p-4'>
                              {works.map((part) => (
                                <figure
                                  key={part.part}
                                  className='flex-shrink-0 border rounded-md items-center'
                                >
                                  <div className='flex justify-between items-center p-8'>
                                    <div className='overflow-hidden rounded-md flex justify-between'>
                                      <img
                                        src={part.partName}
                                        alt={`Photo by ${part.part}`}
                                        className='w-[180px] h-[180px] object-contain'
                                      />
                                    </div>
                                  </div>
                                </figure>
                              ))}
                            </div>
                            <ScrollBar orientation='vertical' />
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </figure>
            ))}
          </div>
          <ScrollBar orientation='vertical' />
        </div>
      </ScrollArea>
      {cart.length > 0 && (
        <div className='mt-4 p-4 border rounded-md'>
          <h2 className='text-xl font-semibold'>Shopping Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className='flex justify-between items-center'>
                <div>
                  <p>
                    {item.part} - {item.brand} - {item.spec}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price} each</p>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
