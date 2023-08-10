import Image from 'next/image'

export default function Home() {
  console.log("Home Page rendered");

  return (
    <main>
      <h1 className='text-center font-extrabold text-red-500'>Home from Page js</h1>
    </main>
  )
}
