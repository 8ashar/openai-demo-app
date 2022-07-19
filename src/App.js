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
    setInputText('');
    document.getElementById("input").value = "";
    document.getElementById("output".value="");
  };

  const handleInputText = (event) =>{
    setInputText(event.target.value)
  };

  const handleOutputChange = (event) => {
    setOutputLang(event.target.value);
  };

  const handlePython = () => {
    const text = `def find max(nums):
    max = list(0)
    
    for num in nums:
        if num > max:
            max = num
          
    return max
      
numbers = [0, 5, 7, 88, 14]
print(max(list))`;

    document.getElementById("input").placeholder=text
  };

  const handleCobol = () => {
    const text = `Sample Cobol`;

    document.getElementById("input").placeholder=text;
  };

  const handleJavaScript = () => {
    const text = `function findMax(nums) {
    let max = nums[0];

    for (var i = 0; i < nums.length; i++)
        if (nums[i] > max) max = nums[i];

    return max;
}

const numbers = [0, 5, 7, 88, 14];
console.log(findMax(numbers));`

  document.getElementById("input").placeholder=text;
  };

  const handleJava = () => {
    const text = `public static int findMax(int[] nums) {
    int max = nums[0];

    for (int num : nums)
        if (num > max) max = num;

    return max;
}

public static void main(String[] args) {
    int[] numbers = [0, 5, 7, 88, 14];
    System.out.println(findMax(numbers))
}`

    document.getElementById("input").placeholder=text;
  };

  const handleC = () => {
    const text = `int findMax(int nums[]) {
    int i, max = arr[0];

    for (i = 0; i < sizeof(nums) / sizeof(max); i++)
        if (nums[i] > max) max = nums[i];

    return max;
}

int main() {
    int numbers[] = [0, 5, 7, 88, 14];
    printf("%d", findMax(numbers));
    return 0;
}`

    document.getElementById("input").placeholder=text;
  };

  const handleSql = () => {
    const text = `SELECT MIN(Price) AS SmallestPrice FROM Products;`;

    document.getElementById("input").placeholder=text;
  };

  const handleEnglish = () => {
    const text = `find the maximum of an array of numbers`
    document.getElementById("input").placeholder=text;
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
                    <MenuItem onClick={handlePython} value={"Python"}>Python</MenuItem>
                    <MenuItem onClick={handleCobol} value={"Cobol"}>COBOL</MenuItem>
                    <MenuItem onClick={handleJavaScript} value={"JavaScript"}>JS</MenuItem>
                    <MenuItem onClick={handleJava} value={"Java"}>Java</MenuItem>
                    <MenuItem onClick={handleC} value={"C"}>C</MenuItem>
                    <MenuItem onClick={handleSql} value={"SQL"}>SQL</MenuItem>
                    <MenuItem onClick={handleEnglish} value={"English"}>English</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{height: 400, paddingTop: '2.5%'}}>
              <TextField
                placeholder=''
                label='Enter your source here:'
                id="input"
                sx={{width: '90%'}}
                multiline rows={15}
                onChange={handleInputText}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        edge="end"
                        onClick={() => {
                          setInputText('');
                          document.getElementById("input").value = "";
                          document.getElementById("output").value="";
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
 
            <Grid item xs={12} sx={{height: 400, paddingTop: '2.5%'}}>
              <TextField
                disabled
                id="output"
                sx={{width: '90%'}}
                multiline rows={15}
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