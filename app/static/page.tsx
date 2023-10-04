import Link from "next/link"

export const dynamic = 'force-static'

export default function Static() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{`Static generation result: ${process.env.FOO}`}</h1>

      <Link href="/dynamic">Go to dynamic test</Link>
    </main>
  )
}
