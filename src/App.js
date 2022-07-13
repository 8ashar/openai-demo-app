import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { InputAdornment, TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const [inputLang, setInputLang] = React.useState('');
  const [outputLang, setOutputLang] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const handleInputChange = (event) => {
    setInputLang(event.target.value);
  };

  const handleInputText = (event) =>{
    setInputText(event.target.value)
  }

  const handleOutputChange = (event) => {
    setOutputLang(event.target.value);
  };

  return (
    <div>

      <Box sx={{ paddingTop: '1%', paddingLeft: '1%', flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <h1>Input</h1>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ maxWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputLang}
                    label="InputLang"
                    onChange={handleInputChange}
                  >
                    <MenuItem value={1}>Python</MenuItem>
                    <MenuItem value={2}>COBOL</MenuItem>
                    <MenuItem value={3}>JS</MenuItem>
                    <MenuItem value={4}>Java</MenuItem>
                    <MenuItem value={5}>C</MenuItem>
                    <MenuItem value={6}>C++</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{height: 300, paddingTop: '2.5%'}}>
              <TextField
                sx={{width: '90%'}}
                multiline rows={11}
                onChange={handleInputText}
                label="Enter your source here."
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton edge="end">
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{paddingTop: '2.5%'}}>
              <Button variant="contained"
              onClick={() => {
                console.log(inputText);
              }}>Submit</Button>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid item xs={12}>
              <h1>Output</h1>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ maxWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={outputLang}
                    label="OutputLang"
                    onChange={handleOutputChange}
                  >
                    <MenuItem value={1}>Python</MenuItem>
                    <MenuItem value={2}>COBOL</MenuItem>
                    <MenuItem value={3}>JS</MenuItem>
                    <MenuItem value={4}>Java</MenuItem>
                    <MenuItem value={5}>C</MenuItem>
                    <MenuItem value={6}>C++</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
 
            <Grid item xs={12} sx={{height: 300, paddingTop: '2.5%'}}>
              <TextField
                disabled
                sx={{width: '90%'}}
                multiline rows={11}
                label="Your translation will appear here."
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton edge="end">
                        <ContentCopyIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;