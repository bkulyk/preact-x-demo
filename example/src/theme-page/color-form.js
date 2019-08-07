import React, { useState } from 'react';
import { Typography, Theme } from '@bitchin/react-material-web';
import { SketchPicker } from 'react-color';

const ColorForm = () => {
  const [primary, setPrimary] = useState('#5d1049');
  const [secondary, setSecondary] = useState('#e30425');
  const [background, setBackground] = useState('#ccc');
  const [surface, setSurface] = useState('#8282');
  const [onPrimary, setOnPrimary] = useState('white');
  const [onSecondary, setOnSecondary] = useState('white');
  const [onSurface, setOnSurface] = useState('black');
  const [onError, setOnError] = useState('black');

  return (
    <div>
      <form>
        <Typography component="label" htmlFor="picker-primary">The theme primary color</Typography>
        <br />
        <SketchPicker id="picker-primary" color={primary} onChangeComplete={({ hex }) => setPrimary(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-secondary">The theme secondary color</Typography>
        <br />
        <SketchPicker id="picker-secondary" color={secondary} onChangeComplete={({ hex }) => setSecondary(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-background">The theme background color</Typography>
        <br />
        <SketchPicker id="picker-background" color={background} onChangeComplete={({ hex }) => setBackground(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-surface">The theme surface color</Typography>
        <br />
        <SketchPicker id="picker-surface" color={surface} onChangeComplete={({ hex }) => setSurface(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-onPrimary">Text color on top of a primary background color</Typography>
        <br />
        <SketchPicker id="picker-onPrimary" color={onPrimary} onChangeComplete={({ hex }) => setOnPrimary(hex)} />
        <p />

        <Typography component="label" htmlFor="">Text-onSecondary color on top of a secondary background</Typography>
        <br />
        <SketchPicker id="picker-onSecondary" color={onSecondary} onChangeComplete={({ hex }) => setOnSecondary(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-onSurface">Text color on top of a surface background</Typography>
        <br />
        <SketchPicker id="picker-onSurface" color={onSurface} onChangeComplete={({ hex }) => setOnSurface(hex)} />
        <p />

        <Typography component="label" htmlFor="picker-onError">Text color on top of a error background</Typography>
        <br />
        <SketchPicker id="picker-onError" color={onError} onChangeComplete={({ hex }) => setOnError(hex)} />
      </form>

      <Theme
        primary={primary}
        secondary={secondary}
        background={background}
        surface={surface}
        onPrimary={onPrimary}
        onSecondary={onSecondary}
        onSurface={onSurface}
        onError={onError}
      />

      <pre style={{ border: '1px solid black' }}>
        {`
        :root {
          --mdc-theme-primary: ${primary}; /* The theme primary color */
          --mdc-theme-secondary: ${secondary}; /* The theme secondary color */
          --mdc-theme-background: ${background}; /* The theme background color */
          --mdc-theme-surface: ${surface}; /* The theme surface color */
          --mdc-theme-on-primary: ${onPrimary}; /* Text color on top of a primary background */
          --mdc-theme-on-secondary: ${onSecondary}; /* Text color on top of a secondary background  */
          --mdc-theme-on-surface: ${onSurface}; /* Text color on top of a surface background */
          --mdc-theme-on-error: ${onError}; /* Text color on top of a error background */
        }
        `}
      </pre>
    </div>
  );
};

export default ColorForm;
