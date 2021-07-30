
import './App.css';
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Table from '@material-ui/core/Table'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'

import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, purple, blue)',
    border: 0,
    borderRadius: 15,
    color: 'red',
    padding: '5px 30px',
    marginBottom: '50px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    }
  },
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(event) => setChecked(event.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
      }
      label="testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                MUI Notes
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>

          <h1>BUTTONS</h1>
          <p>Requires $ yarn add @material-ui/core</p>
          <p>Then add: import Button from '@material-ui/core/Button'</p>
          <Button onClick={() => { alert('variant="contained" color="primary"') }} variant="contained" color="primary">Hello World</Button>
          <Button onClick={() => { alert('size="small"') }} size="small" variant="contained" color="primary">Small Button</Button>
          <Button onClick={() => { alert('size="large"') }} size="large" variant="contained" color="primary">Large Button</Button>
          <Button onClick={() => { alert('color="secondary"') }} variant="contained" color="secondary">Secondary Colour</Button>
          <Button onClick={() => { alert('color="default"') }} variant="contained" color="default">Default Colour</Button>
          <Button onClick={() => { alert('color="inherit"') }} variant="contained" color="inherit">Inherit Colour</Button>
          <Button onClick={() => { alert('variant="outlined"') }} variant="outlined" color="primary">Outlined Variant</Button>
          <Button onClick={() => { alert('variant="text"') }} variant="text" color="primary">Text Variant</Button>
          <Button disabled variant="contained" color="primary">Disabled Button</Button>
          <Button onClick={() => { alert('style={{fontSize: 6}}') }} style={{ fontSize: 6 }} variant="contained" color="primary">Styled Button</Button>

          <h1>BUTTONS W/ ICONS</h1>
          <p>Requires $ yarn add @material-ui/icons</p>
          <p>Then imported icons: eg. import SaveIcon from '@material-ui/icons/Save'</p>
          <Button onClick={() => { alert('startIcon={<SaveIcon />}') }} startIcon={<SaveIcon />} variant="contained" color="primary" >Start Icon</Button>
          <Button onClick={() => { alert('endIcon={<SaveIcon />}') }} endIcon={<SaveIcon />} variant="contained" color="primary" >End Icon</Button>
          <Button onClick={() => { alert('startIcon={<SaveIcon />} endIcon={<SaveIcon />}') }} startIcon={<SaveIcon />} endIcon={<SaveIcon />} variant="contained" color="primary" >Start/End Icon</Button>

          <h3>More Icons include:</h3>
          <Table>
            <tr>
              <th>
                Icon
              </th>
              <th>
                Import
              </th>
              <th>
                Component
              </th>
            </tr>

            <tr>
              <td>
                Save
              </td>
              <td>
                import SaveIcon from '@material-ui/icons/Save'
              </td>
              <td>
                &lt;SaveIcon /&gt;
              </td>
            </tr>

            <tr>
              <td>
                Delete
              </td>
              <td>
                import DeleteIcon from '@material-ui/icons/Delete'
              </td>
              <td>
                &lt;DeleteIcon /&gt;
              </td>
            </tr>
          </Table>

          <h1>Button Group</h1>
          <p>Add: import ButtonGroup from '@material-ui/core/ButtonGroup'</p>
          <p>Wrap buttons in: &lt;ButtonGroup&gt;&lt;/ButtonGroup&gt; tags</p>
          <ButtonGroup>
            <Button onClick={() => { alert('saved') }} startIcon={<SaveIcon />} variant="contained" color="primary">Save</Button>
            <Button onClick={() => { alert('discarded') }} startIcon={<DeleteIcon />} variant="contained" color="secondary">Discard</Button>
          </ButtonGroup>
          <p>
            You can store button parameters in the ButtonGroup component to uniform all buttons in that group.
            As an example, the variant and color properties are stored in the ButtonGroup for the following.
          </p>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={() => { alert('saved') }} startIcon={<SaveIcon />}>Save</Button>
            <Button onClick={() => { alert('discarded') }} startIcon={<DeleteIcon />}>Discard</Button>
          </ButtonGroup>

          <h1>CHECKBOX</h1>
          <p>Add: import Checkbox from '@material-ui/core/Checkbox'</p>
          <p>create function with useState hook</p>
          <p>Add Checkbox component to function with checked parameter and onChange handler</p>
          <p>Call with &lt;CheckboxFunctionName /&gt;</p>
          <p>Checkbox componentents can also have their colours changed and be set to disabled like buttons</p>
          <CheckboxExample />

          <h1>TEXT FIELD</h1>
          <p>Variants: filled, outlined</p>
          <p>colors</p>
          <TextField className="textfield" />
          <TextField className="textfield" variant="filled" />
          <TextField className="textfield" variant="outlined" />
          <TextField className="textfield" variant="outlined" color="secondary" />
          <TextField className="textfield" variant="outlined" type="date" />
          <TextField className="textfield" variant="outlined" type="time" color="secondary" />
          <TextField className="textfield" variant="outlined" label="The Time" type="time" />
          <TextField className="textfield" variant="outlined" label="Email" type="email" value="test@test.com" />
          <TextField className="textfield" variant="outlined" label="Email" type="email" placeholder="test@test.com" />

          <h1>STYLED BUTTON</h1>
          <ButtonStyled />

          <h1>styles</h1>
          <p>import curly makeStyles, ThemeProvider, createMuiTheme curly from '@material-ui/core/styles'</p>
          <p>import curly orange, green, blue, red curly from '@material-ui/core/colors'</p>

          <h1>FONT</h1>
          <p>$ yarn add fontsource-roboto</p>
          <p>import 'fontsource-roboto'</p>
          <p>import Typography from '@material-ui/core/Typography'</p>
          <Typography>Hello World</Typography>
          <Typography variant="h1">variant="h1"</Typography>
          <Typography variant="h2">variant="h2"</Typography>
          <Typography variant="h3">variant="h3"</Typography>
          <Typography variant="h4">variant="h4"</Typography>
          <Typography variant="h5">variant="h5"</Typography>
          <Typography variant="h6">variant="h6"</Typography>
          <Typography variant="subtitle1">variant="subtitle1"</Typography>
          <Typography variant="body1">variant="body1"</Typography>

          <Typography variant="h2" component="div">variant="h2" component="div"</Typography>

          <h1>Grid and Paper components</h1>
          <p>import Paper from '@material-ui/core/Paper'</p>
          <p>import Grid from '@material-ui/core/Grid'</p>
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100' }} />
            </Grid>
            <Grid item xs={3} lg={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>

        </div>
      </Container>

    </ThemeProvider>
  );
}

export default App;
