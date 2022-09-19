import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner(){
    return (
        <div className='pt-1 bg-gradient-to-r from-green-400 to-blue-600 self-stretch rounded-lg mt-8'>
            <div className='bg-[#2A2634] px-8 py-6 self-stretch rounded-b-lg flex justify-between'>
            <div>
                <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
            </div>

            <Dialog.Trigger className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
                <MagnifyingGlassPlus size={24} />Publicar anúncio</Dialog.Trigger>
            </div>
        </div>
    )
}