import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
        <div className=" font-mono text-xl font-bold  flex justify-around bg-orange-100">
            <Link to="/">
                <p className=' mt-16'>Suneel</p>
            </Link>
                <p className=' mt-16'>Menu</p>
      </div>
    </>
  )
}
