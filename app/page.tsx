"use client"; 
import * as fabric from 'fabric'; 
import {Canvas, Rect} from "fabric"; 
import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import React, { useEffect, useRef } from 'react';
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";


export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef =  useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");


  /*useEffect(() => {
    const canvas = initializeFabric({fabricRef, canvasRef})
    window.addEventListener("resize", () =>{
    handleResize({  fabricRef })
  })
  }, [])*/

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });
    if (!canvas) return;
  
    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({ options, canvas, isDrawing, shapeRef, selectedShapeRef });
    });
  
    const resizeHandler = () => handleResize({ fabricRef });
    window.addEventListener("resize", resizeHandler);
  
    return () => {
      window.removeEventListener("resize", resizeHandler);
      canvas.dispose();
    };
  }, []);
  

  return (
    <main className="h-screen overflow-hidden">
    <Navbar/>
    <section className="flex h-full flex-row">
      <LeftSidebar/>
        < Live canvasRef={canvasRef} />
      <RightSidebar/>
  </section>
  </main>
  );
}