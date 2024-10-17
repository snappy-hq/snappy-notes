"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "~/components/ui/button";

const HeroHeading = () => {
  const router = useRouter();
  return (
    <header className="flex flex-col justify-center items-center md:items-start space-y-4 p-4 text-center md:text-left">
      <h1 className="font-semibold text-3xl sm:text-4xl md:tex-5xl text-center">
        Your ideas, documents & plans. Unified. Welcome to{" "}
        <span className="font-semibold underline">Snappy Notes</span>
      </h1>
      <h4 className="w-full font-light text-center text-lg md:text-xl">
        It&apos;s the shared workspace where,{" "}
        <span>the work happens faster and smoother</span>
      </h4>
      <Button
        className="md:mx-auto w-max"
        onClick={() => router.push("/notes")}
      >
        Create your first note
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </header>
  );
};

export default HeroHeading;