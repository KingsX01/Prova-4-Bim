import Image from "next/image";
import logomob from "@/img/logomob.png";
import logodesk from "@/img/logodesk.png";
import background from "@/img/background.png";

export default function Home() {
  return (
    <main className="flex flex-col max-lg:bg-zinc-800 lg:bg-background bg-cover h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-[6rem] lg:gap-[3rem] lg:bg-white p-4 rounded-3xl">
        <div className="flex items-center">
          <Image className="lg:sr-only" src={logomob} alt="logo" width={180} />
          <Image className="max-lg:sr-only pt-8" src={logodesk} alt="logodesk" width={250} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-zinc-500 lg:text-black text-lg">Nome de usuário</span>
            <input className="w-[359px] lg:w-[530px] h-[73px] lg:h-[81] bg-zinc-600 lg:bg-white border-[3px] rounded-md" type="text" />
          </div>
          <div className="flex flex-col ">
            <span className="text-zinc-500 lg:text-black text-lg">Senha</span>
            <input className="w-[359px] lg:w-[530px] h-[73px] lg:h-[81] bg-zinc-600 lg:bg-white border-[3px] rounded-md" type="text" />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <button className="bg-fuchsia-600 text-white w-[359px] h-[78px] font-semibold text-xl rounded-lg lg:w-[530px]">Entrar</button>
            <button className="bg-white text-fuchsia-600 w-[359px] h-[78px] font-extrabold text-xl rounded-lg lg:w-[530px] lg:bg-zinc-300 lg:h-[50px]">Esqueci minha senha</button>
          </div>
        </div>
      </div>
    </main>
  )
}
