const sizes = {
  up() {
    // Your code for up() function
  },
  down(size) {
    const breakpoints = {
      xs: "576px",
      sm: "768px",
      m: "992px",
      l: "1200px",
      xl: "1600px",
    };
    return `@media (max-width: ${breakpoints[size]})`;
  },
};

export default sizes;
