"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-6 w-full">
      <Logo cname="hidden md:flex" />
      <div className="flex justify-between md:justify-end items-center md:ml-auto w-full text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Privacy & Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
