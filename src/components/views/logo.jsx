import logo from './logo.png';

export default function Logo() {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1442px] h-[57px]">
    <div className="absolute top-[-1px] left-[-1px] bg-grey-grey-1 box-border w-[1442px] h-[58px] border-[1px] border-solid border-grey-grey-5" />
    <div className="absolute top-[12px] left-[48px] leading-[32px] font-semibold">
    <img
        alt=""
        src={logo}
      />
    </div>
  </div>
  )
}
