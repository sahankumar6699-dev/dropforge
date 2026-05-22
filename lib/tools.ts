import {
  Download,
  FilePdf,
  Image,
  Music,
  Scissors,
  Zap
} from "lucide-react";

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: "converter" | "image" | "pdf" | "video";
  icon: React.ReactNode;
  href: string;
}

export const tools: Tool[] = [
  {
    id: "1",
    title: "Video Downloader",
    description: "Download videos from YouTube and other platforms",
    category: "video",
    icon: <Download className="h-6 w-6 text-cyan-400" />,
    href: "#"
  },
  {
    id: "2",
    title: "PDF Converter",
    description: "Convert documents to PDF format easily",
    category: "pdf",
    icon: <FilePdf className="h-6 w-6 text-cyan-400" />,
    href: "#"
  },
  {
    id: "3",
    title: "Image Compressor",
    description: "Reduce image file sizes without quality loss",
    category: "image",
    icon: <Image className="h-6 w-6 text-cyan-400" />,
    href: "#"
  },
  {
    id: "4",
    title: "Audio Converter",
    description: "Convert between popular audio formats",
    category: "converter",
    icon: <Music className="h-6 w-6 text-cyan-400" />,
    href: "#"
  },
  {
    id: "5",
    title: "Video Cutter",
    description: "Trim and cut videos with precision",
    category: "video",
    icon: <Scissors className="h-6 w-6 text-cyan-400" />,
    href: "#"
  },
  {
    id: "6",
    title: "Format Converter",
    description: "Convert between 50+ file formats",
    category: "converter",
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    href: "#"
  }
];
