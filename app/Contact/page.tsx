import Link from 'next/link' 

function page() {
  return (
    <section>
    <div>About Page</div>
    <div>
      <Link href = {"/"}>Back to home</Link>
    </div>
    </section>
  )
}

export default page