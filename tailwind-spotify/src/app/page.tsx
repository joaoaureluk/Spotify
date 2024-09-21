import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Fullscreen, Maximize2} from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 p-6">
            
            <div className="flex items-center gap-6">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            
            <nav className='space-y-5 mt-10'>
              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <HomeIcon />
                Home
              </a>

              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Search />
                Search
              </a>

              <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                <Library />
                Your library
              </a>

            </nav>

            <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">

              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">MCTailWind</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">IAGeneratorMusics</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk Pesadão</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Musica Eletronica</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Musica Urbana</a>
              
              

            </nav>
          </aside>
          <main className="flex-1 p-6">
            
            <div className='flex items-center gap-3 '>
                <button className='rounded-full bg-black/40 p-1'>
                  <ChevronLeft />
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
                </button>
            </div>
            
            <h1 className='semi-bold text-3xl mt-10'>Good to frenetic nights</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>

              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>

                <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>
              
              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              <a href="#" className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1: No Shopping</strong>

              <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
            </div>

            <h2 className='semi-bold text-3xl mt-10'>Make for vitu </h2>

            <div className='grid grid-cols-8 gap-4 mt-4'>

              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20'>
              <Image src="/Bonda1.jpg" className='w-full' width={120} height={120} alt="Capa de album do Bonda" />
              <strong className='font-semibold'>Bonda 1</strong>
              <span className='text-sm text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
              </a>

              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20'>
              <Image src="/Bonda1.jpg" className='w-full' width={120} height={120} alt="Capa de album do Bonda" />
              <strong className='font-semibold'>Bonda 1</strong>
              <span className='text-sm text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
              </a>

              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20'>
              <Image src="/Bonda1.jpg" className='w-full' width={120} height={120} alt="Capa de album do Bonda" />
              <strong className='font-semibold'>Bonda 1</strong>
              <span className='text-sm text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
              </a>

              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20'>
              <Image src="/Bonda1.jpg" className='w-full' width={120} height={120} alt="Capa de album do Bonda" />
              <strong className='font-semibold'>Bonda 1</strong>
              <span className='text-sm text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
              </a>

              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/20'>
              <Image src="/Bonda1.jpg" className='w-full' width={120} height={120} alt="Capa de album do Bonda" />
              <strong className='font-semibold'>Bonda 1</strong>
              <span className='text-sm text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
              </a>

              


            </div>


          </main>
        </div>
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex im items-center justify-between">
          
          <div className='flex items-center gap-3'>
          <Image src="/Bonda1.jpg" width={70} height={70} alt="Capa de album do Bonda" />
             <div className='flex flex-col'>
              <strong className='font-normal'>Bonda 1</strong>
              <span className='text-xs text-zinc-400'>Mcvv, Mc Boffe, Luckhaos</span>
             </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
             <div className='flex items-center gap-6 '>
              <Shuffle size={24}  className='text-zinc-200' />
              <SkipBack size={24} className='text-zinc-200' />

              <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black'>
                <Play fill='bg-black' />
                </button>

                <SkipForward size={24} className='text-zinc-200' />
                <Repeat size={24} className='text-zinc-200' />
             </div>
             
             <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>10:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-500'>40:56</span>
          </div>
          </div>
          
          <div className='flex items-center gap-4'>
             <Mic2 size={20} />
             <LayoutList size={20} />
             <Laptop2 size={20} />
             <div className='flex items-center gap-2'>
             <Volume size={20} />
             <div className='h-1 rounded-full w-20 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
             </div>
             <Maximize2 size={20} />

          </div>
          </footer> 
      </div>
    </>
  );
}
