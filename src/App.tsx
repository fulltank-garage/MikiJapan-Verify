import mikiJapanLogo from './assets/miki-japan-logo.jpg'

function App() {
  return (
    <main className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto grid min-h-dvh w-full max-w-md place-items-center px-5 py-[calc(env(safe-area-inset-top)+32px)]">
        <div className="flex w-full flex-col items-center gap-6">
          <h1 className="sr-only">Miki Japan Verify</h1>

          <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[0_18px_40px_rgba(75,53,39,0.12)]">
            <img
              alt="Miki Japan"
              className="size-36 rounded-full object-cover sm:size-44"
              height="176"
              src={mikiJapanLogo}
              width="176"
            />
          </div>

          <div className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-center shadow-[0_12px_28px_rgba(75,53,39,0.08)]">
            <p className="text-lg font-semibold leading-7 text-[var(--color-text)]">
              กรุณารอการตรวจสอบข้อมูล
            </p>
            <p className="mt-1 text-xl font-bold leading-8 text-[var(--color-primary-dark)]">
              10-20 นาที
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
