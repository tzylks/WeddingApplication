import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Switch from "@mui/material/Switch"
import { useState } from 'react'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";

const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: "#212121"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: "red"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: "gold"
    },
    [`& .${outlinedInputClasses.input}`]: {
      color: "black"
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
      color: "red"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
      color: "black"
    },
    [`& .${inputLabelClasses.outlined}`]: {
      color: "green"
    },
    [`&:hover .${inputLabelClasses.outlined}`]: {
      color: "red"
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
      color: "purple"
    }
  });

export default function SignUp({ open, setOpen }) {

    const [name, setName] = useState('')
    const [plusone, setPlusOne] = useState(false)

    const userForm = (e) => {
        setName(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            plusone
        }
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json()).then(console.log)
        setOpen(!open)
    }

    const slideCheck = () => {
        setPlusOne(!plusone)
    }

    return (
        <>
            <Box sx={{}}>
                <Box>
                    <form onSubmit={submitForm}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', columnGap: 10, height: '100%', mt: '2vh' }}>
                            <StyledTextField required variant="outlined" value={name} onChange={(e) => userForm(e)} placeholder="First and Last Name" PaperProps={{style: {background: 'black'}}} sx={{ background: 'white', borderRadius: 2, borderColor: 'yellow' }}></StyledTextField>
                        </Box>
                        <FormControlLabel sx={{ color: 'white', marginLeft: '0vw'}} label="Will you be bringing a guest?" labelPlacement="start" control={<Switch onChange={slideCheck} color="success" />}></FormControlLabel>
                        <Button variant='outlined' type="submit" sx={{ width: '100%', color: 'gold', borderColor: 'gold'}}>Submit</Button>
                    </form>
                </Box>
            </Box>
        </>
    )
}