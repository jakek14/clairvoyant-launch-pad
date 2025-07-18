"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    freezeActive: false,
    shuffleTags: true,
    shape: 'sphere',
    noSelect: true
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  // Use light theme by default since we have a white background
  const theme = "light"

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme),
    )
  }, [data, theme])

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  )
}

const slugs = [
  "google",
  "meta",
  "facebook",
  "instagram", 
  "tiktok",
  "snapchat",
  "pinterest",
  "linkedin",
  "twitter",
  "x",
  "reddit",
  "youtube",
  "microsoft",
  "amazonwebservices",
  "amazon",
  "shopify",
  "wix",
  "squarespace",
  "bigcommerce",
]

export default function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}