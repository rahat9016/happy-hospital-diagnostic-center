import hotlineIcon from "@/public/icons/hotline.png";
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderTopBar() {
  return (
    <div className="hidden lg:flex items-center w-full h-12 bg-secondary">
          <div
            className="container flex items-center justify-between"
            aria-label="Nav bar"
            tabIndex={0}
          >
            <h3 className="font-medium text-sm text-white">
              Welcome to happy hospital & diagnostic center
            </h3>
            <div className="flex items-center gap-6 text-white text-base font-normal">
              <Link href={"/career"}>Career</Link>
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={""} className="flex items-center gap-2">
                <Image
                  src={hotlineIcon}
                  width={52}
                  height={62}
                  alt="hotline:16254"
                  className="w-6 h-6"
                />
                Hotline: 16254
              </Link>
            </div>
          </div>
        </div>
  )
}
