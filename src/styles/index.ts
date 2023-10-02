// for media query
const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

// for passing of custom value
const customValue = (val: number) => `${val}px`

interface IMediaQueriesBreakpoints {
  custom: (maxNumber: number) => string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200)
}

const colors = {
  white: '#FFF',
  whitesmoke: '#F9F9F9',
  lightGrey: '#ECECEC',
  grey: '#C4C4C4',
  mediumGrey: '#A7A7A7',
  deepGrey: '#343434',
  green: '#127c0f',
  black: '#000000',
  blue: '#1B77F3',
  red: '#CF3C3F'
}

const fontSizes = {
  sm: '12px',
  md: '16px',
  lg: '22px',
  custom: customValue
}

const spacing = {
  xs: '10px',
  sm: '14px',
  md: '22px',
  custom: customValue
}

export const theme = {
  colors,
  spacing,
  fontSizes,
  media
}
