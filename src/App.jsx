import { Button, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material'
import { AccessAlarm, ThreeDRotation, LightMode, SettingsBrightness, DarkModeOutlined } from '@mui/icons-material'
import { orange } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'
function App() {
  const { mode, setMode } = useColorScheme()
  const handleChangeMode = (e) => {
    setMode(e.target.value)
  }
  return (
    <>
      <FormControl sx={{ display:'block', m:1}} size='small'>
        <InputLabel id="select-mode">Mode</InputLabel>
        <Select
          sx={{ minWidth:130, color:orange[700] }}
          labelId="select-mode"
          id="select-mode"
          value={mode}
          label="mode"
          onChange={handleChangeMode}
        >
          <MenuItem value={'light'}>
            <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
              <LightMode fontSize="small"/>Light
            </Box>
          </MenuItem>
          <MenuItem value={'dark'}>
            <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
              <DarkModeOutlined fontSize="small"/>Dark
            </Box>
          </MenuItem>
          <MenuItem value={'system'}>
            <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
              <SettingsBrightness fontSize="small"/>System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined">Hello world</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
      <Button variant="outlined" startIcon={<AccessAlarm />}>Delete</Button>
      <Button variant="outlined" startIcon={<ThreeDRotation />}>Send</Button>
    </>
  )
}
export default App
