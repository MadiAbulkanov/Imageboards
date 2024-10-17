import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchMessages } from "../../features/message.slice";
import MessageItem from "./MessageItem/MessageItem";
import { Box, Button, Grid, Modal } from "@mui/material";
import AddMessagePage from "../../components/AddMessagePage/AddMessagePage";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const { messages } = useAppSelector((state) => {
    return state.messages
  });
 
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    if (!open) {
      dispatch(fetchMessages());
    }
  }, [open, dispatch]);

  return (
     <Grid container direction="column" >
         <Modal open={open} onClose={handleClose}>
            <Box>
               <AddMessagePage closeModal={handleClose}/> 
            </Box>
         </Modal>   
     <Grid container justifyContent="flex-end" >
       <Button onClick={handleOpen} sx={{ margin: '10px', fontSize: '16px' }}>
         Add message
       </Button>
     </Grid>
     <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
       {messages.map((messageItem) => (
         <MessageItem messageItem={messageItem} key={messageItem.id} />
       ))}
     </Grid>
   </Grid>
  );
};

export default HomePage;