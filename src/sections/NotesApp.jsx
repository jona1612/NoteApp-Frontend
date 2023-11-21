import { Box } from '@chakra-ui/react'
import React from 'react'
import NoteList from '../components/NoteList'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import NoteInputModal from '../components/NoteInputModal'
import { useSelector } from 'react-redux'

const NotesApp = () => {

  const notesData = useSelector((store) => store.appReducer.notesData)

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
      <Navbar />
      <Box backgroundSize="cover" height={notesData.length > 4 ? "auto" : "100vh"} mt={"2%"} width={"100%"} >
        <NoteInputModal />
        <NoteList />
      </Box>
    </motion.div>
  )
}

export default NotesApp;