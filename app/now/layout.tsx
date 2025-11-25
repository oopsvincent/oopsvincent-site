import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | oopsvincent",
  description: "What Vincent is focused on right now — updated regularly.",
};


export default function layout({ children }: { children: React.ReactNode }) {
    return <main>{children}</main> ;
}