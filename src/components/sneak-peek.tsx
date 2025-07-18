'use client'
import React from 'react';
import { AnimatedList } from "@/components/ui/animated-list";

interface Notification {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const notifications: Notification[] = [
  {
    name: "New sale from Google Ads",
    description: "Visitor converted to customer",
    time: "2m ago",
    icon: "💳",
    color: "#4285F4",
  },
  {
    name: "New sale from Meta",
    description: "Facebook visitor made purchase",
    time: "5m ago",
    icon: "🛒",
    color: "#1877F2",
  },
  {
    name: "New sale from Instagram",
    description: "Instagram story led to sale",
    time: "8m ago",
    icon: "💰",
    color: "#E4405F",
  },
  {
    name: "New sale from TikTok",
    description: "TikTok video drove conversion",
    time: "12m ago",
    icon: "🎯",
    color: "#000000",
  },
  {
    name: "New sale from LinkedIn",
    description: "B2B lead converted",
    time: "15m ago",
    icon: "📈",
    color: "#0A66C2",
  },
  {
    name: "New sale from YouTube",
    description: "Video ad generated sale",
    time: "18m ago",
    icon: "💎",
    color: "#FF0000",
  },
  {
    name: "New sale from Amazon",
    description: "Product listing converted",
    time: "22m ago",
    icon: "🚀",
    color: "#FF9900",
  },
  {
    name: "New sale from Shopify",
    description: "Direct website purchase",
    time: "25m ago",
    icon: "⭐",
    color: "#96BF48",
  },
];

const Notification = ({ name, description, icon, color, time }: Notification) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-neutral-800 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function SneakPeek() {
  return (
    <div className="relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <AnimatedList
        items={notifications.map((notification, idx) => (
          <Notification {...notification} key={idx} />
        ))}
        showGradients={true}
        enableArrowNavigation={false}
        displayScrollbar={false}
        gradientColor="from-background"
      />
    </div>
  );
}