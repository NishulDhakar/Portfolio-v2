"use client";

import { about } from "@/config/About";
import QuickInfo from "./QuickInfo";
import Name from "./Name";

export default function About() {

  return (
    <section className="mt-24 transition-colors duration-300 flex items-center">
      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12">
        <Name />
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-semibold ">
              About
            </div>
            <div className="space-y-4 text-secondary dark:text-gray-300 leading-relaxed">
              <p>{about.description}</p>
            </div>
          </div>
          <QuickInfo />
        </div>
      </div>
    </section>
  );
}
