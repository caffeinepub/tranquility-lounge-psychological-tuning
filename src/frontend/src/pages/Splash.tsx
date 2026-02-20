export default function Splash() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 dark:from-amber-950 dark:via-orange-950 dark:to-rose-950">
      <div className="text-center space-y-8 px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-amber-900 dark:text-amber-100">
          Tranquility Lounge
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-amber-800 dark:text-amber-200">
          Psychological Tuning
        </h2>
        <div className="pt-8">
          <div className="w-16 h-1 bg-amber-600 dark:bg-amber-400 mx-auto rounded-full animate-pulse" />
        </div>
        <p className="text-sm text-amber-700 dark:text-amber-300 pt-12">
          © Valentina D. Diaconu
        </p>
      </div>
    </div>
  );
}
