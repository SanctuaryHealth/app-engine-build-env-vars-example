import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function Dynamic() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{`Dynamic generation result: ${process.env.FOO}`}</h1>

      <Link href="/static">Go to static test</Link>
    </main>
  )
}
