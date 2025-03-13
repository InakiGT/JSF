import { DialogType } from '../types/Dialog'

function Dialog({ title, subtitle, content, kind, modalRef }: DialogType) {
  return (
    <dialog ref={ modalRef } className="w-100 max-h-200 bg-white text-[#212529] p-5 rounded-lg shadow-lg z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:bg-[rgba(0,0,0,0.4)] xl:max-h-min xl:w-300 xl:p-10">
      <div className="w-full flex justify-end">
        <svg
          className="w-10 h-10 text-[#ff9900] cursor-pointer hover:text-[#ff9900dd]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
          onClick={ () => modalRef.current?.close() }
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
      </div>


      <div className="w-4/7 mx-auto">
        <h3 className="text-title uppercase text-[#6c757d] text-2xl">{ kind === 'project' ? 'Proyecto terminal' : '' }</h3>
        <h2 className="text-title uppercase text-[#2c3e50] text-4xl xl:text-5xl">{ title }</h2>
        <h4 className="text-title text-2xl">{ subtitle }</h4>
      </div>

      <div className="flex items-center gap-2 justify-center my-5">
        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#212529" />
        </svg>
      { kind === 'material' ? (
        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
      ) : (
        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
        </svg>
      )}
        <svg width="120" height="4" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="120" height="4" rx="5" ry="5" fill="#212529" />
        </svg>
      </div>

      <div className="flex max-h-120 overflow-y-auto gap-10 flex-wrap xl:flex-col items-center">
        {
          content.map((item, index) => (
            <article key={ index } className="border-2 border-[#00000020] rounded-xl xl:max-w-8/17 max-h-fit">
              <div className="p-6">
                { item.title && (<h4 className="text-title text-2xl mb-5">{ item.title }</h4>) }
                <p className='text-center'>{ item.content }</p>
                </div>
              <div className="border-t-2 border-[#00000020] bg-[#00000008] py-3 px-5">
                <button
                  className="bg-[#555] cursor-pointer w-full text-white text-xl flex items-center justify-center py-2 px-30 rounded-xl border-2 border-[#444]"
                  onClick={ () => console.log(item.link) }
                >Ir</button>
              </div>
            </article>
          ))
        }
      </div>
    </dialog>
  )
}

export default Dialog
