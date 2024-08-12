
import Link from "next/link";

export default function Home() {
  return (
 <div className='w-full min-h-screen'>

<Link href="/cards/1">

cards

</Link>
  
  <Link href="/admin">
    Admin 
  </Link>
 </div>
  );
}
