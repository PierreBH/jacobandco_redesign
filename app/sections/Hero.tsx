"use client";

export default function Hero() {
  return (
    <div className={"w-screen h-screen flex justify-center items-center overflow-hidden relative"}>
      <img src={"/img/background_hero.png"} alt={"logo"} className={"w-full h-full top-0 left-0 absolute object-cover bg-hero"}/>
      <img src={"/img/background_light_hero.png"} alt={"bg"} className={"w-full h-full top-0 left-0 absolute object-fill bg-hero"}/>
      <img src={"/img/frame_watch.svg"} alt={"frame"} className={"w-screen top-[33vh] animation-rotate left-0 absolute opacity-20 object-fill bg-hero"}/>

      <div className="w-[calc(100vw_-_40px)] flex justify-center h-[calc(100vh_-_40px)] sticky top-0">
        {/* Contour pointillé */}
        <div className={"absolute z-10 w-full h-full"}>
          <div className={"flex justify-between my-5 px-5 w-full"}>
            <img src={"/logo_full.svg"} alt={"logo"} className={"w-full max-w-[200px] my-auto left-0"}/>
            <div className={"flex items-center gap-8"}>
              <div className={"flex gap-2 font-titleLight tracking-[0.15em] text-sm text-white/20"}>
                <span className={""}>Fr</span>
                <span className={""}>En</span>
                <span className={""}>De</span>
              </div>
              <button
                className={"text-black font-title bg-white px-5 leading-none tracking-wider text-sm rounded-full py-3 glow-effect-btn"}>Commander
              </button>
            </div>
          </div>
          <div className={"flex items-start gap-5 justify-center"}>
            <img src={"./logo.svg"} className={"w-[100px] h-full glow-effect"}/>
            <h1
              className={"leading-tight font-title tracking-wider uppercase text-[5vw] text-transparent bg-gradient-to-b from-white to-white/10 bg-clip-text glow-effect"}>Astronomia</h1>
          </div>
          <div className={"flex items-start justify-center"}>
            <h4
              className={"leading-tight font-titleItalic tracking-wider text-[4vw] text-transparent bg-gradient-to-b from-[#384AF8] to-[#384AF8]/10 bg-clip-text"}>Regulator</h4>
          </div>
        </div>

        <div className={"flex items-center"}>
          <img src={"/img/frame_hero.svg"} alt={"logo"} className={"w-fit h-1/3 absolute my-auto right-0"}/>
        </div>
        <div
          className="absolute inset-0 border-l-2 border-r-2 border-b-2 border-[#FFD700] border-opacity-20 border-dashed rounded-[3rem]"></div>
        <p className={"font-body text-[0.9vw] h-fit w-full mx-[5vw] tracking-tight flex justify-between text-[#FFD700] text-opacity-40 top-[-10px] relative"}>
          <span>VST Telescope postion //</span>
          <span>Reference : 155948.10 / -460145.60</span>
          <span>Actual : 155948.05 / -460145.31</span>
          <span>Sidereal Time : 140852.85</span>
          <span>Hour Angle : -15146.02</span>
          <span>Airmass : 1.166</span>
          <span>Parallatic : -55.819</span>
          <span>Altitude : 59.022</span>
        </p>
        {/* Coins pleins */}
        <div
          className="absolute w-12 h-12 border-t-2 border-l-2 border-[#6e6016] top-0 left-0 rounded-tl-[20rem]"></div>
        <div
          className="absolute w-12 h-12 border-t-2 border-r-2 border-[#6e6016] top-0 right-0 rounded-tr-[20rem]"></div>
        <div
          className="absolute w-12 h-12 border-b-2 border-l-2 border-[#6e6016] bottom-0 left-0 rounded-bl-[20rem]"></div>
        <div
          className="absolute w-12 h-12 border-b-2 border-r-2 border-[#6e6016] bottom-0 right-0 rounded-br-[20rem]"></div>
      </div>

    </div>
  );
}