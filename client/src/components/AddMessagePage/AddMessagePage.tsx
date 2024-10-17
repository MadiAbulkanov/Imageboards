import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { createMessage } from "../../features/message.slice";
import { Box } from "@mui/system";
import { Button, Grid, TextField } from "@mui/material";
import FileInput from "../UI/Form/FileInput";

export interface MessageData {
  author: string;
  message: string;
  image: string;
}

const AddMessagePage = ({ closeModal }:{ closeModal: () => void }) => {
  const dispatch = useAppDispatch();

  const [newMessage, setNewMessage] = useState({
    author: '',
    message: '',
    image: '',
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#fff',
    border: '1px solid #ccc',
    boxShadow: 24,
    padding: 4,
    borderRadius: 2
  };

  const submitFormMessage = async(formData: FormData) => {
    await dispatch(createMessage(formData));
    closeModal();
  }

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData();
    Object.entries(newMessage).forEach(([key, value]) => {
      if (typeof value === 'object') {
        formData.append(key, value);
      } else {
        formData.append(key, `${value}`);
      }
    });
    submitFormMessage(formData);

  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setNewMessage((prevMessage) => {
      return { ...prevMessage, [name]: value };
    });
  };

  const fileChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if(file) {
      const {name} = e.target
      setNewMessage((prevNewMessage) => ({ ...prevNewMessage, [name]: file }));
    }
  };

  return (
        <Box component={'form'} autoComplete="off" onSubmit={submitFormHandler} sx={style} >
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField
              fullWidth
              variant="outlined"
              id="author"
              label="Author"
              value={newMessage.author}
              onChange={inputChangeHandler}
              name="author"
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              variant="outlined"
              id="message"
              label="Message"
              value={newMessage.message}
              onChange={inputChangeHandler}
              name="message"
            />
          </Grid>
          <Grid item xs>
          <FileInput label='Image' name='image' onChange={fileChangeHandler} />
          </Grid>
          <Grid item xs>
            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
  );
};

export default AddMessagePage;