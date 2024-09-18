import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from 'lucide-react'
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
              <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <HomeIcon />
                Home
              </a>

              <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <Search />
                Search
              </a>

              <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
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
            
            <h1 className='semi-bold text-3xl mt-10'>Good afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>

              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
              <a href="" className='bg-white/10 rounded overflow-hidden flex items-center gap-4'>
              <Image src="/Bonda1.jpg" width={104} height={80} alt="Capa de album do Bonda" />
              <strong>Bonda 1 No Shopping</strong>
              </a>
            </div>


          </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
          footerrr
          </footer> 
      </div>
    </>
  );
}
