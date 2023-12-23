import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ status, onClose, word }) {
    const dialog = useRef();

    const handleOpen = () => { // timeout before opening modal
        const timer =  setTimeout(() => {
            dialog.current.showModal()
        }, 800)
        return () => clearTimeout(timer);
    }

    useEffect(() => {
    if (status) {
        handleOpen()
    } else {
        dialog.current.close()
    }
    }, [status])
  

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="modal">
        <div className="text-center modal-box">
            <h3 className={"mb-6 text-4xl font-bold "+ (status==='lost' ? ' text-error' : ' text-secondary')}>You {status}!</h3>
            
            {status==='lost' ? 
            <>
                <h3 className="mb-2 text-xl leading-none opacity-60 text-neutral">The word was:</h3>
                <h1 className='mt-1 text-base-100 font-bold tracking-wider px-4 py-1.5 mx-auto mb-8 text-4xl uppercase rounded-2xl pb-2 bg-base-content w-fit'> {word}</h1>
            </>
            :
            <h3 className='mb-8 text-2xl italic'>Congratulations! You get nothing.</h3>
            }

            {/* <p className="py-4 opacity-40">Press ESC key or click the button below to close</p> */}
            <div className="justify-center my-0 modal-action">
                <form method="dialog">
                    <button className="rounded-xl btn btn-secondary btn-outline">NEW GAME</button>
                </form>
            </div>
        </div>
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
