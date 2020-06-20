import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'
fairyGatesTheme.overrideThemeStyles = () => ({
  html: {
    fontSize: '2.75vmin',
    overflow: 'auto',
  },
  h1: {
    color: 'inherit',
  },
  h2: {
    color: 'inherit',
  },
  h3: {
    color: 'inherit',
  },
  h4: {
    color: 'inherit',
  },
  h5: {
    color: 'inherit',
  },
  a: {
    textShadow: 'none',
  },
})

const typography = new Typography(fairyGatesTheme)

export default typography