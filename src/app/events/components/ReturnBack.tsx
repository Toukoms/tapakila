"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

function ReturnBack({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div className={cn("flex items-center w-fit gap-2", className)}>
      <MdArrowBack size={20} className="text-primary font-bold" />
      <button
        className="link link-primary text-lg font-bold"
        onClick={() => router.back()}
      >
        Return Back
      </button>
    </div>
  );
}

export default ReturnBack;
