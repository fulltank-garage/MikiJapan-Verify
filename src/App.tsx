import mikiJapanLogo from './assets/miki-japan-logo.jpg'

function App() {
  return (
    <main className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
        <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[color:var(--color-surface)]/95 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+14px)] backdrop-blur">
          <div className="flex items-center gap-3">
            <img
              alt="Miki Japan"
              className="size-10 shrink-0 rounded-full border border-[var(--color-border)] object-cover shadow-sm"
              height="40"
              src={mikiJapanLogo}
              width="40"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-[var(--color-muted)]">
                Miki Japan
              </p>
              <h1 className="truncate text-lg font-semibold text-[var(--color-text)]">
                ตรวจสอบข้อมูล
              </h1>
            </div>
          </div>
        </header>

        <section className="flex flex-1 items-center px-4 py-8">
          <div className="w-full rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 text-center shadow-sm">
            <div
              className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--color-primary)] text-4xl font-semibold text-white shadow-sm"
              aria-hidden="true"
            >
              ✓
            </div>

            <p className="mt-6 text-sm font-semibold text-[var(--color-muted)]">
              ส่งข้อมูลแล้ว
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug text-[var(--color-text)]">
              กรุณารอการตรวจสอบข้อมูล
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              ร้านจะใช้เวลาตรวจสอบข้อมูลประมาณ
            </p>
            <p className="mt-1 text-2xl font-bold leading-8 text-[var(--color-primary-dark)]">
              10-20 นาที
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
