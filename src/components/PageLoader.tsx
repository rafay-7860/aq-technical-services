"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minTime = reduceMotion ? 350 : 1800;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minTime - elapsed);
      window.setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      window.setTimeout(finish, 3000);
    }

    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f6f8fb]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
          aria-busy="true"
          role="status"
        >
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,93,4,0.16),transparent_68%)]"
              animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(11,31,58,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <div className="relative flex flex-col items-center px-6">
            <div className="relative">
              <motion.span
                className="absolute -inset-10 rounded-full border border-orange/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute -inset-6 rounded-full border border-dashed border-navy/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative overflow-hidden px-2 py-2">
                <motion.div
                  className="absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-transparent via-orange/30 to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: "420%" }}
                  transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.25 }}
                />

                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="AQ Technical Services"
                    width={320}
                    height={210}
                    priority
                    className="relative z-10 h-auto w-[10.5rem] object-contain sm:w-[13rem]"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-8 flex w-48 flex-col items-center gap-3 sm:w-56">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#1f6feb] via-orange to-[#2ecc71]"
                  initial={{ width: "8%" }}
                  animate={{ width: ["8%", "72%", "100%"] }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], times: [0, 0.55, 1] }}
                />
              </div>
              <motion.p
                className="font-display text-[11px] font-semibold tracking-[0.28em] text-navy/65 uppercase"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading
              </motion.p>
            </div>
            <span className="sr-only">Loading AQ Technical Services website</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
