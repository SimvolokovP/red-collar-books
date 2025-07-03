import { BsBook, BsBookFill } from "react-icons/bs";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

export function MobileBar() {
  const location = useLocation();

  return (
    <div className="fixed z-[5] transition duration-200 ease-in-out bottom-0 left-0 right-0 mx-auto block md:hidden">
      <div className="container">
        <div className="bg-accent w-full px-[16px] py-[12px] rounded-t-xl">
          <ul className="flex justify-center items-center gap-[24px]">
            <li>
              <NavLink
                className="flex flex-col justify-center items-center"
                to={"/"}
              >
                {location.pathname === "/" ? (
                  <BsBookFill size={24} />
                ) : (
                  <BsBook size={24} />
                )}
                <span className="text-sm">Главная</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="flex flex-col justify-center items-center"
                to={"/favorites"}
              >
                {location.pathname === "/favorites" ? (
                  <IoMdHeart size={24} />
                ) : (
                  <IoMdHeartEmpty size={24} />
                )}
                <span className="text-sm">Избранное</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
