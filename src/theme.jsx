import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { grey, lightBlue, orange } from '@mui/material/colors'
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: grey[900],
          main: grey[900],
          dark: grey[700],
          darker: grey[900]
        },
        secondary:{
          light: lightBlue[300],
          main: lightBlue[500],
          dark: lightBlue[700],
          darker: lightBlue[900]
        },
        gradient:
          'linear-gradient(to left, var(--mui-palette-primary-main), var(--mui-palette-primary-dark))',
        border: {
          subtle: 'var(--mui-palette-neutral-200)'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          light: orange[300],
          main: orange[500],
          dark: orange[700],
          darker: orange[900]
        },
        secondary: {
          light: grey[500],
          main: grey[600],
          dark: grey[700],
          darker: grey[900]
        },
        gradient:
          'linear-gradient(to left, var(--mui-palette-primary-light), var(--mui-palette-primary-main))',
        border: {
          subtle: 'var(--mui-palette-neutral-600)'
        }
      }
    }
  }
})
export default theme