import { cn } from "@/lib/utils";

function RectSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-gray-400/50 animate-pulse min-h-4 rounded-full",
        className
      )}
    />
  );
}

function EventCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card transition-all hover-scale shadow-sm hover:shadow-md border border-primary-content/60",
        className
      )}
    >
      <RectSkeleton className="aspect-[16/9] w-full overflow-hidden mb-6 rounded-none" />
      <div className="p-5">
        <RectSkeleton className="w-40 mb-2" />

        <div className="space-y-2 mb-4">
          <RectSkeleton className="w-40" />
          <RectSkeleton className="w-20" />
          <RectSkeleton className="w-20" />
          <RectSkeleton className="w-60" />
        </div>

        <div className="flex items-center justify-between mt-auto z-50">
          <RectSkeleton className="w-32" />

          <RectSkeleton className="w-20" />
        </div>
      </div>
    </div>
  );
}

export default EventCardSkeleton;
