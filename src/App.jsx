import { Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'

function App() {
  const handleOk = () => {
    return "hello"
  }
  return (
    <>
      <Button variant="outlined">Hello world</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
      <Button variant="outlined" startIcon={<AccessAlarm />}>Delete</Button>
      <Button variant="outlined" startIcon={<ThreeDRotation />}>Send</Button>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </>
  )
}

export default App
