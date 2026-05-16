"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const goToAccess = () => router.push("/request-access");

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-headline font-bold tracking-tighter text-on-surface dark:text-on-surface">
            IntakeMatrix
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-on-surface dark:text-on-surface">
          <Link
            className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
            href="/#roi"
          >
            ROI
          </Link>
          <Link
            className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors duration-200"
            href="/#pricing"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={goToAccess}
            className="bg-primary text-on-primary hover:bg-primary-fixed-dim px-6 py-2 rounded-full font-medium active:scale-95 transition-transform duration-150"
          >
            Start Trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
