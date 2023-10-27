import { useContext } from 'react'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import ModalContext from '@/contexts/modalContext'

const WelcomeModal = () => {

  // TODO
  // Adding context was an attempt to stop the modal reopening every
  // time the home page rerenders. Need to fix
  const modalContext = useContext(ModalContext)
  const {
    callbacks: {
      setOpenModal,
    },
    openModal,
  } = modalContext

  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: openModal })

  const handleClose = () => {
    setOpenModal(false)
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            I see you have found your way to my technical test.
            Have a browse and feel free to ask questions as you go.
            It&apos;s not perfect but it is a fair nudge for a 2nd year developer
            that hasn&apos;t touched NextJS or Chakra before.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default WelcomeModal