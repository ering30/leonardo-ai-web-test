import ModalContext from '@/contexts/modalContext'

import useModals from '@/hooks/useModals'

import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Modal from '@/components/Modal'

const HomePage = () => {

  const modalContext = useModals()

  return (
    <ModalContext.Provider value={modalContext}>
      <Layout>
        <Hero />
        <Modal />
      </Layout>
    </ModalContext.Provider>
  )
}

export default HomePage