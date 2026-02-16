"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";

type SWStatus = "checking" | "ready" | "unsupported" | "not-registered";

const LABELS: Record<string, Record<SWStatus, string>> = {
  en: {
    checking: "Checking…",
    ready: "Offline ready",
    unsupported: "Offline not supported",
    "not-registered": "Loading…",
  },
  "zh-TW": {
    checking: "檢查中…",
    ready: "離線就緒",
    unsupported: "不支援離線",
    "not-registered": "載入中…",
  },
};

export function PWAStatusIndicator() {
  const { locale } = useLocale();
  const [status, setStatus] = useState<SWStatus>("checking");
  const lang = locale === "zh-TW" ? "zh-TW" : "en";
  const label = LABELS[lang][status];

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      setStatus("unsupported");
      return;
    }

    const updateStatus = () => {
      if (navigator.serviceWorker.controller) {
        setStatus("ready");
      } else {
        const reg = navigator.serviceWorker.getRegistration();
        reg.then((r) => {
          if (r?.active) setStatus("ready");
          else setStatus("not-registered");
        }).catch(() => setStatus("not-registered"));
      }
    };

    updateStatus();

    navigator.serviceWorker.addEventListener("controllerchange", updateStatus);

    navigator.serviceWorker.ready.then(() => {
      setStatus(navigator.serviceWorker.controller ? "ready" : "not-registered");
    }).catch(() => setStatus("not-registered"));

    const checkRegistration = () => {
      navigator.serviceWorker.getRegistrations().then((regs) => {
        const swReg = regs.find((r) => r.active);
        setStatus(swReg?.active ? "ready" : "not-registered");
      });
    };

    const t = setTimeout(checkRegistration, 2000);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", updateStatus);
      clearTimeout(t);
    };
  }, []);

  if (status === "unsupported") return null;

  const isReady = status === "ready";

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs shadow-lg backdrop-blur-sm"
      style={{
        backgroundColor: isReady ? "rgba(39, 174, 96, 0.2)" : "rgba(255,255,255,0.05)",
        borderColor: isReady ? "rgba(39, 174, 96, 0.5)" : undefined,
      }}
      title={label}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{
          backgroundColor: isReady ? "#27ae60" : "#94a3b8",
          boxShadow: isReady ? "0 0 6px #27ae60" : undefined,
        }}
        aria-hidden
      />
      <span className={isReady ? "text-green-300" : "text-frost-slate"}>
        {label}
      </span>
    </div>
  );
}
