export default function Loading() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        {/* Animated Loader */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-16 h-16">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-border rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-space-grotesk font-bold mb-3">
          Loading
        </h2>
        <p className="text-muted-foreground">
          Please wait while we prepare your content...
        </p>
      </div>
    </main>
  );
}