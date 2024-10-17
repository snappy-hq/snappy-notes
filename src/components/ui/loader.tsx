import { cn } from "~/lib/utils";
import { LoaderIcon } from "lucide-react";

const Loader = ({ className }: { className?: string }) => {
  return <LoaderIcon className={cn("text-primary animate-spin", className)} />;
};

export default Loader;
