import { useState } from "react"

const useModals = () => {

  const [openModal, setOpenModal] = useState(true)

  return {
    callbacks: {
      setOpenModal: (value) => setOpenModal(value)
    },
    openModal
  }
}

export default useModals