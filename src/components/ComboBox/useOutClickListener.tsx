import { useEffect } from "react"

export const useOutClickListener = (ref:any,onClickHandle:any) => {
    useEffect(() => {
        const handleDocumentMouseDown = (event:any) => {
         
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("handleDocumentMouseDown worked")
                onClickHandle();
            }
        }

        document.addEventListener('mousedown', handleDocumentMouseDown);
        return () => {
            console.log("return asdasdasdasd")
            document.removeEventListener('mousedown', handleDocumentMouseDown);
        }
    }, [ref,onClickHandle])
}
