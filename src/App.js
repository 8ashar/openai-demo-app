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
import translate from './translate';

function App() {
  const [inputLang, setInputLang] = React.useState('');
  const [outputLang, setOutputLang] = React.useState('');
  const [inputText, setInputText] = React.useState('');

  const handleInputChange = (event) => {
    setInputLang(event.target.value)
  };

  const handleInputText = (event) =>{
    setInputText(event.target.value)
  };

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
                    <MenuItem value={"Python"}>Python</MenuItem>
                    <MenuItem value={"Cobol"}>COBOL</MenuItem>
                    <MenuItem value={"JavaScript"}>JS</MenuItem>
                    <MenuItem value={"Java"}>Java</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"C++"}>C++</MenuItem>
                    <MenuItem value={"SQL"}>SQL</MenuItem>
                    <MenuItem value={"English"}>English</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{height: 300, paddingTop: '2.5%'}}>
              <TextField
                id="input"
                sx={{width: '90%'}}
                multiline rows={11}
                onChange={handleInputText}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        edge="end"
                        onClick={() => {
                          setInputText('');
                          document.getElementById("input").value = "";
                        }}
                      >
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
                translate(inputLang, outputLang, inputText).then((response) => {document.getElementById("output").value = response;})
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
                    <MenuItem 
                      disabled={inputLang === "Python" || inputLang === "SQL"}
                      value={"Python"}>
                        Python
                    </MenuItem>

                    <MenuItem
                      disabled={inputLang === "Cobol" || inputLang === "SQL"}
                      value={"Cobol"}>
                        COBOL
                    </MenuItem>

                    <MenuItem
                      disabled={inputLang === "JavaScript" || inputLang === "SQL"}
                      value={"JavaScript"}>
                        JS
                    </MenuItem>

                    <MenuItem
                      disabled={inputLang === "Java" || inputLang === "SQL"}
                      value={"Java"}>
                        Java
                    </MenuItem>

                    <MenuItem
                      disabled={inputLang === "C" || inputLang === "SQL"}
                      value={"C"}>
                        C
                    </MenuItem>

                    <MenuItem
                      disabled={inputLang === "C++" || inputLang === "SQL"}
                      value={"C++"}>
                        C++
                    </MenuItem>

                    <MenuItem
                      disabled={!(inputLang === "English")}
                      value={"SQL"}>
                      SQL
                    </MenuItem>

                    <MenuItem
                      value={"English"}>
                        English
                      </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
 
            <Grid item xs={12} sx={{height: 300, paddingTop: '2.5%'}}>
              <TextField
                disabled
                id="output"
                sx={{width: '90%', input: {color: 'black'}}}
                multiline rows={11}
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