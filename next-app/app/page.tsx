export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Next.js + Vercel
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Vercel에 바로 배포 가능한 Next.js 기본 템플릿입니다.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="mb-1 text-lg font-semibold">Docs →</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Next.js 공식 문서를 확인하세요.
            </p>
          </a>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-200 p-5 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <h2 className="mb-1 text-lg font-semibold">Deploy →</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Vercel에 한 번의 클릭으로 배포하세요.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
