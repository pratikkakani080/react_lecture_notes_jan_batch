import { useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const loggedInEmail = localStorage.getItem("loggedInEmail");

  useEffect(() => {
    if (!loggedInEmail) {
      navigate("/login");
    }
  }, [loggedInEmail, navigate]);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#ededed] px-10 py-3">
          <div className="flex items-center gap-4 text-[#141414]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">Portfolio</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-[#141414] text-sm font-medium leading-normal" to="#">About</Link>
              <Link className="text-[#141414] text-sm font-medium leading-normal" to="/blog">Projects</Link>
              <Link className="text-[#141414] text-sm font-medium leading-normal" to="#">Contact</Link>
              {loggedInEmail && (
                <button
                  className="text-[#141414] text-sm font-medium leading-normal"
                  onClick={() => {
                    localStorage.removeItem("loggedInEmail");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDytbA12pt3miC6BNEnAHq4Si04NTSBYxzKgTK5byc8D9r83DgVu42vtGRs8fMlB_UuF0tta3g876nK0xucdFnv06Xzbp3lQOToOAvp-zUpWdVyIxYscPsXOjkwNRK-B_FSMW1yzU55jlJTbK-HwaISBVEN0tZvMzBO6pLbcpWc_DHRBvbG38fe1AFM9pFpfopu8jiE-01mWEMhHOxGXbDDYxE7qbPVr4EztsXqDAsyLNwJnDQoJj77Cy_f4MeQMI1J6tiy-guJmYTy")',
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Ethan Carter</p>
                    <p className="text-neutral-500 text-base font-normal leading-normal text-center">Product Designer</p>
                    <p className="text-neutral-500 text-base font-normal leading-normal text-center">
                      Crafting intuitive digital experiences that blend form and function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <Link
                to="/blog"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#141414] text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">View Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
