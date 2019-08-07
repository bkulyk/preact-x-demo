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
        <label>
          <Typography>The theme primary color</Typography>
          <br/>
          <SketchPicker color={primary} onChangeComplete={({ hex }) => setPrimary(hex)} />
        </label>
        <p />


        <label>
          <Typography>The theme secondary color</Typography>
          <br/>
          <SketchPicker color={secondary} onChangeComplete={({ hex }) => setSecondary(hex)} />
        </label>
        <p />

        <label>
          <Typography>The theme background color</Typography>
          <br/>
          <SketchPicker color={background} onChangeComplete={({ hex }) => setBackground(hex)} />
        </label>
        <p />

        <label>
          <Typography>The theme surface color</Typography>
          <br/>
          <SketchPicker color={surface} onChangeComplete={({ hex }) => setSurface(hex)} />
        </label>
        <p />

        <label>
          <Typography>Text color on top of a primary background color</Typography>
          <br/>
          <SketchPicker color={onPrimary} onChangeComplete={({ hex }) => setOnPrimary(hex)} />
        </label>
        <p />

        <label>
          <Typography>Text color on top of a secondary background</Typography>
          <br/>
          <SketchPicker color={onSecondary} onChangeComplete={({ hex }) => setOnSecondary(hex)} />
        </label>
        <p />

        <label>
          <Typography>Text color on top of a surface background</Typography>
          <br/>
          <SketchPicker color={onSurface} onChangeComplete={({ hex }) => setOnSurface(hex)} />
        </label>
        <p />

        <label>
          <Typography>Text color on top of a error background</Typography>
          <br/>
          <SketchPicker color={onError} onChangeComplete={({ hex }) => setOnError(hex)} />
        </label>
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
