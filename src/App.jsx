import { Select, MenuItem, FormControl, InputLabel, Box, Container, Button } from '@mui/material'
import { LightMode, SettingsBrightness, DarkModeOutlined } from '@mui/icons-material'
import { } from '@mui/material/colors'
import { useColorScheme } from '@mui/material/styles'

import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

function App() {
  const { mode, setMode } = useColorScheme()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const SelectMode = () => {
    const handleChangeMode = (e) => {
      setMode(e.target.value)
    }
    return (
      <FormControl size='small'>
        <InputLabel id="select-mode">Mode</InputLabel>
        <Select
          sx={{ minWidth:130, color: 'primary.main' }}
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
    )
  }
  return (
    <>
      <Container disableGutters sx={{ maxWidth:720, height:'100dvh' }}>
        <Box sx={{ display: 'flex', alignItems:'center', height:60, backgroundColor: 'secondary.main' }}>
          <SelectMode />
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyUp={handleSearch}
            />
          </Search>
        </Box>
        <Box sx={{ display: 'flex', alignItems:'center', height:60, backgroundColor: 'secondary.light' }}>
          Board bar
        </Box>
      </Container>
    </>
  )
}
export default App
