
import './App.css';
import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Table from '@material-ui/core/Table'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root : {
    background: 'linear-gradient(45deg, purple, blue)',
    border: 0,
    borderRadius: 15,
    color: 'red',
    padding: '0 30px',
    marginBottom: '50px'
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
    <div className="App">
        <h1>BUTTONS</h1>
        <p>Requires $ yarn add @material-ui/core</p>
        <p>Then add: import Button from '@material-ui/core/Button'</p>
        <Button onClick={() => {alert('variant="contained" color="primary"')}} variant="contained" color="primary">Hello World</Button>
        <Button onClick={() => {alert('size="small"')}} size="small" variant="contained" color="primary">Small Button</Button>
        <Button onClick={() => {alert('size="large"')}} size="large" variant="contained" color="primary">Large Button</Button>
        <Button onClick={() => {alert('color="secondary"')}} variant="contained" color="secondary">Secondary Colour</Button>
        <Button onClick={() => {alert('color="default"')}} variant="contained" color="default">Default Colour</Button>
        <Button onClick={() => {alert('color="inherit"')}} variant="contained" color="inherit">Inherit Colour</Button>
        <Button onClick={() => {alert('variant="outlined"')}} variant="outlined" color="primary">Outlined Variant</Button>
        <Button onClick={() => {alert('variant="text"')}} variant="text" color="primary">Text Variant</Button>
        <Button disabled variant="contained" color="primary">Disabled Button</Button>
        <Button onClick={() => {alert('style={{fontSize: 6}}')}} style={{fontSize: 6}} variant="contained" color="primary">Styled Button</Button>

        <h1>BUTTONS W/ ICONS</h1>
        <p>Requires $ yarn add @material-ui/icons</p>
        <p>Then imported icons: eg. import SaveIcon from '@material-ui/icons/Save'</p>
        <Button onClick={() => {alert('startIcon={<SaveIcon />}')}} startIcon={<SaveIcon />} variant="contained" color="primary" >Start Icon</Button>
        <Button onClick={() => {alert('endIcon={<SaveIcon />}')}} endIcon={<SaveIcon />} variant="contained" color="primary" >End Icon</Button>
        <Button onClick={() => {alert('startIcon={<SaveIcon />} endIcon={<SaveIcon />}')}} startIcon={<SaveIcon />} endIcon={<SaveIcon />} variant="contained" color="primary" >Start/End Icon</Button>

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
          <Button onClick={() => {alert('saved')}} startIcon={<SaveIcon />} variant="contained" color="primary">Save</Button>
          <Button onClick={() => {alert('discarded')}} startIcon={<DeleteIcon />} variant="contained" color="secondary">Discard</Button>
        </ButtonGroup>
        <p>
          You can store button parameters in the ButtonGroup component to uniform all buttons in that group.
          As an example, the variant and color properties are stored in the ButtonGroup for the following.
        </p>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => {alert('saved')}} startIcon={<SaveIcon />}>Save</Button>
          <Button onClick={() => {alert('discarded')}} startIcon={<DeleteIcon />}>Discard</Button>
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
        <TextField />
        <TextField variant="filled" />
        <TextField variant="outlined" />
        <TextField variant="outlined" color="secondary" />
        <TextField variant="outlined" type="date" />
        <TextField variant="outlined" type="time" />
        <TextField variant="outlined" label="The Time" type="time" />
        <TextField variant="outlined" label="Email" type="email" value="test@test.com" />
        <TextField variant="outlined" label="Email" type="email" placeholder="test@test.com" />

        <h1>STYLED BUTTON</h1>
        <ButtonStyled />
    </div>
  );
}

export default App;
