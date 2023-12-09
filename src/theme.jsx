import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { amber, purple, lightBlue, cyan } from '@mui/material/colors'
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: lightBlue[300],
          main: lightBlue[500],
          dark: lightBlue[700],
          darker: lightBlue[900]
        },
        secondary: purple,
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
          light: cyan[300],
          main: cyan[500],
          dark: cyan[700],
          darker: cyan[900]
        },
        secondary: amber,
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