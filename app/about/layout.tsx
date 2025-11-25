import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | oopsvincent",
  description:
    "Vincent (aka oopsvincent) — web developer, product thinker, and creator of Rhythmé. Exploring the intersection of design, technology, and human growth.",
};


export default function layout({ children }: { children: React.ReactNode }) {
    return <main>{children}</main> ;
}