import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Home,
  Image,
  Laptop,
  LayoutPanelLeft,
  LineChart,
  Loader2,
  LucideIcon,
  LucideProps,
  MessagesSquare,
  Moon,
  MoreVertical,
  Package,
  Plus, 
  Search,
  Settings,
  SunMedium,
  Trash,
  User,
  X,
  Sparkles,
  TrendingUp,
  LayoutDashboard,
  Send,
  GitBranch,
  LinkIcon,
  ServerIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  add: Plus,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  billing: CreditCard,
  bookOpen: BookOpen,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  check: Check,
  close: X,
  copy: Copy,
  dashboard: LayoutPanelLeft,
  ellipsis: MoreVertical,
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  layoutDashboard: LayoutDashboard,
  send: Send,
  link: LinkIcon,
  ami: ServerIcon,
  instance: ServerIcon,
  repos: GitBranch,
  content: FileText,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="google"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        fill="currentColor"
      />
    </svg>
  ),
  nextjs: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="nextjs"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
      ></path>
    </svg>
  ),
  help: HelpCircle,
  home: Home,
  laptop: Laptop,
  lineChart: LineChart,
  logo: ({ ...props }: LucideProps) => (
    <svg {...props} width="24" height="24" viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M161.834 76.3335C179.204 76.3335 193.334 62.2035 193.334 44.8335C193.334 27.4635 179.204 13.3335 161.834 13.3335C144.464 13.3335 130.334 27.4635 130.334 44.8335C130.334 62.2035 144.464 76.3335 161.834 76.3335ZM161.834 94.3335C166.334 94.3335 170.834 93.7035 175.334 92.4435V148.333C175.334 173.173 155.174 193.333 130.334 193.333H58.334C33.494 193.333 13.334 173.173 13.334 148.333V76.3335C13.334 51.4935 33.494 31.3335 58.334 31.3335H114.224C112.964 35.8335 112.334 40.3335 112.334 44.8335C112.334 72.1935 134.474 94.3335 161.834 94.3335Z" fill="#2DAC5C" />
      <path d="M48.0483 142.714L64.4411 142.714C66.1489 149.473 70.0112 155.461 75.4203 159.737C80.8295 164.013 87.4786 166.333 94.3219 166.333C101.165 166.333 107.814 164.013 113.224 159.737C118.633 155.461 122.495 149.473 124.203 142.714L140.62 142.714C142.666 142.714 144.628 141.884 146.075 140.409C147.521 138.933 148.334 136.932 148.334 134.845C148.334 132.758 147.521 130.757 146.075 129.281C144.628 127.805 142.666 126.976 140.62 126.976L124.215 126.976C122.511 120.212 118.65 114.217 113.239 109.937C107.828 105.656 101.175 103.333 94.3279 103.333C87.4805 103.333 80.8276 105.656 75.4168 109.937C70.006 114.217 66.1448 120.212 64.4411 126.976L48.0483 126.976C46.0023 126.976 44.0402 127.805 42.5934 129.281C41.1467 130.757 40.334 132.758 40.334 134.845C40.334 136.932 41.1467 138.933 42.5934 140.409C44.0402 141.885 46.0023 142.714 48.0483 142.714ZM94.334 119.108C97.3855 119.108 100.368 120.031 102.906 121.76C105.443 123.489 107.42 125.947 108.588 128.823C109.756 131.698 110.061 134.862 109.466 137.915C108.871 140.968 107.401 143.772 105.244 145.973C103.086 148.174 100.337 149.672 97.3439 150.28C94.3511 150.887 91.2489 150.575 88.4297 149.384C85.6105 148.193 83.2009 146.176 81.5056 143.588C79.8103 141 78.9054 137.957 78.9054 134.845C78.9099 130.673 80.5368 126.672 83.4293 123.722C86.3217 120.772 90.2434 119.112 94.334 119.108Z" fill="white" />
    </svg>
  ),
  media: Image,
  messages: MessagesSquare,
  moon: Moon,
  package: Package,
  page: File,
  post: FileText,
  search: Search,
  settings: Settings,
  spinner: Loader2,
  sun: SunMedium,
  trash: Trash, 
  user: User,
  warning: AlertTriangle,
};
