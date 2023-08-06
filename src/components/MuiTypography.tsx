import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 Heading</Typography>
      <Typography variant="h2"> h2 Heading</Typography>
      <Typography variant="h3"> h3 Heading</Typography>
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>
      {/* you can change the semantic using component prop */}
      <Typography variant="h5"> h5 Heading</Typography>
      <Typography variant="h6"> h6 Heading</Typography>

      <Typography variant="subtitle1"> subtitle 1</Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        officiis. Labore possimus reprehenderit cumque laudantium odit
        consequatur, doloribus beatae modi tempore cupiditate blanditiis
        officiis tempora, harum totam dolore autem ex. 2
      </Typography>

      {/* gutton bottom ad a bottom margin */}

      {/* body1 is the default variant of Typography */}

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        officiis. Labore possimus reprehenderit cumque laudantium odit
        consequatur, doloribus beatae modi tempore cupiditate blanditiis
        officiis tempora, harum totam dolore autem ex. 2
      </Typography>
    </div>
  );
};

export default MuiTypography;
