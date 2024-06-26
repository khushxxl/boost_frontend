"use client";
import Hero from "@/components/Hero";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { Suspense, useEffect } from "react";
import toast from "react-hot-toast";

function Referrals() {
  const searchParams = useSearchParams();

  const userId: any = searchParams.get("userId");
  useEffect(() => {
    // const { userId } = searchParams;
    if (userId) {
      toast("Using Referral Link", {
        icon: "🔗",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [userId]);
  return (
    <Suspense>
      <Hero refId={userId} />
    </Suspense>
  );
}

export default Referrals;

// http://localhost:3000/referrals?userId=1233
