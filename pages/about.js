// pages/about.js
import Image from 'next/image';

export default function About() {
  return <>
    <h1> About </h1>
    <Image
      src="/images/test.jpg"
      height={144}
      width={144}
      alt="my family"
    />
  </>
}