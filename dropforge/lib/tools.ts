import {
  Archive,
  Camera,
  Download,
  FileImage,
  FileScan,
  FileText,
  ImageIcon,
  Music,
  Scissors,
  Sparkles,
  Video
} from "lucide-react";
import type { ComponentType } from "react";

export type Tool = {
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  href: string;
};

export type ToolCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  gradient: string;
  tools: Tool[];
};

export const featuredTools: Tool[] = [
  {
    name: "YouTube Downloader",
    description: "Capture creator-ready video assets with quality-aware export choices.",
    icon: Video,
    accent: "from-red-400 to-fuchsia-400",
    href: "/video"
  },
  {
    name: "Instagram Downloader",
    description: "Save reels, stories, and media drafts through a polished frontend flow.",
    icon: Download,
    accent: "from-pink-400 to-violet-400",
    href: "/video"
  },
  {
    name: "MP4 to MP3",
    description: "Extract clean audio previews for podcasts, shorts, and social edits.",
    icon: Music,
    accent: "from-cyan-300 to-blue-500",
    href: "/converter"
  },
  {
    name: "Compress Image",
    description: "Shrink image payloads while preserving crisp visual delivery.",
    icon: ImageIcon,
    accent: "from-emerald-300 to-cyan-400",
    href: "/image"
  },
  {
    name: "PDF Merge",
    description: "Combine document drops into a single organized export surface.",
    icon: Archive,
    accent: "from-violet-300 to-indigo-500",
    href: "/pdf"
  },
  {
    name: "PDF to Word",
    description: "Convert static PDFs into editable document workflows.",
    icon: FileText,
    accent: "from-blue-300 to-violet-400",
    href: "/pdf"
  },
  {
    name: "OCR Scanner",
    description: "Turn screenshots and scans into searchable editable text.",
    icon: FileScan,
    accent: "from-amber-200 to-fuchsia-400",
    href: "/pdf"
  },
  {
    name: "Image to PDF",
    description: "Package visual assets into shareable PDF bundles with polish.",
    icon: FileImage,
    accent: "from-sky-300 to-purple-500",
    href: "/image"
  }
];

export const toolCategories: Record<string, ToolCategory> = {
  video: {
    slug: "video",
    title: "Video Tools",
    eyebrow: "Creator capture suite",
    description:
      "Frontends for fast social video acquisition, soundtrack extraction, and content prep workflows.",
    gradient: "from-red-400/30 via-fuchsia-500/20 to-blue-500/30",
    tools: [
      featuredTools[0],
      featuredTools[1],
      featuredTools[2],
      {
        name: "Clip Trimmer",
        description: "Frame a future trimming workflow for short-form publishing.",
        icon: Scissors,
        accent: "from-fuchsia-300 to-cyan-400",
        href: "/video"
      }
    ]
  },
  pdf: {
    slug: "pdf",
    title: "PDF Tools",
    eyebrow: "Document forge",
    description:
      "Merge, convert, and extract text from documents inside a conversion-first SaaS workspace.",
    gradient: "from-violet-500/30 via-blue-500/20 to-cyan-400/30",
    tools: [featuredTools[4], featuredTools[5], featuredTools[6]]
  },
  image: {
    slug: "image",
    title: "Image Tools",
    eyebrow: "Pixel compression bay",
    description:
      "Optimize images, prepare downloadable assets, and convert visual drops into PDFs.",
    gradient: "from-emerald-400/25 via-cyan-400/20 to-violet-500/30",
    tools: [
      featuredTools[3],
      featuredTools[7],
      {
        name: "Format Converter",
        description: "Prepare a polished frontend for PNG, JPG, and WebP conversion.",
        icon: Camera,
        accent: "from-cyan-300 to-emerald-300",
        href: "/image"
      }
    ]
  },
  converter: {
    slug: "converter",
    title: "Converter Tools",
    eyebrow: "Universal conversion lane",
    description:
      "A clean command center for media, document, and image transformations.",
    gradient: "from-blue-500/30 via-violet-500/25 to-fuchsia-500/25",
    tools: [
      featuredTools[2],
      featuredTools[5],
      featuredTools[7],
      {
        name: "Batch Converter",
        description: "A future-ready surface for multi-file conversion queues.",
        icon: Sparkles,
        accent: "from-violet-300 to-sky-300",
        href: "/converter"
      }
    ]
  }
};

export const navItems = [
  { label: "Video", href: "/video" },
  { label: "PDF", href: "/pdf" },
  { label: "Image", href: "/image" },
  { label: "Converter", href: "/converter" }
];
