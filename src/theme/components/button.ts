const Button = {
  baseStyle: {
    background: 'blue.600',
    color: 'white',
    _hover: {
      background: 'blue.200',
      color: 'black',
      fontWeight: 'bold',
    },
    _active: {
      background: 'blue.800',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  sizes: {
    md: {
      h: '3rem',
      w: '8rem',
      fontSize: 'md',
    },
  },
  variants: {
    navbutton: {
      boxShadow: '0 0 2px 2px',
    },
  },
}

export default Button
