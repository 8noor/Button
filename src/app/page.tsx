'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  // A simple Arrow function alert

  const handlerOnClick = () =>{
    alert('👀👀')
  }
  return (
    // Event Handler
    <div className="flex flex-col justify-center items-center m-10 ">
      <div className="right-0 top-0 m-2 py-2 mt-20">
        <img
          src="images/allah.jpeg"
          alt="allah logo"
          className="w-40 h-auto rounded-full"
        />
      </div>
      <Button className=" right-0 mr-1 mt-3 py-5 pt-5 text-white bg-red-500" onClick={handlerOnClick}>
        Click Here
      </Button>

      
    </div>
  );
}

