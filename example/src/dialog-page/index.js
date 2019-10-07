import React, { Fragment, useState } from 'react';
import { Dialog, Button, Typography } from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle, { SectionTitle } from '../page-title';

const options = { maul: 'Maul', vader: 'Vader', tyranus: 'Tyranus' };

const DialogPage = () => {
  const [simpleOpen, setSimpleOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [darth, setDarth] = useState();

  const [open2, setOpen2] = useState(false);
  const [selected, setSelected] = useState();

  const [rollOpen, setRollOpen] = useState(false);

  return (
    <Fragment>
      <PageTitle>Dialog</PageTitle>

      <section>
        <SectionTitle>Very Simple Example</SectionTitle>
        <Typography component="p">
          In this example only the title, open and onClose props are provided.
        </Typography>
        <Example>
          <Dialog
            title="Super Simple"
            open={simpleOpen}
            onClose={() => setSimpleOpen(false)}
          />

          <p>
            <Button onClick={() => setSimpleOpen(true)}>Open</Button>
          </p>
        </Example>
      </section>

      <section>
        <SectionTitle>Simple Example with action</SectionTitle>
        <Typography component="p">
          This is an example where the onClose function doing more, the body is provided as well
          as the actions and a default action. Pressing enter will close with the default action.
        </Typography>
        <Example>
          <Dialog
            open={open}
            onClose={({ action }) => {
              setOpen(false);
              setDarth(action);
            }}
            title="Pick the best Darth!"
            body="There is only one right option."
            actions={options}
            defaultAction="vader"
          />

          <p>
            <Button onClick={() => setOpen(true)}>Who&apos;s the best Darth?</Button>
          </p>

          <Typography component="p">
            <span>{darth && darth !== 'close' && `You selected: Darth ${options[darth]}`}</span>
          </Typography>
        </Example>
      </section>

      <section>
        <SectionTitle>With Custom Actions, Custom Title, and Custom Body</SectionTitle>
        <Typography component="p">
          This is an example with custom elements for the title and body props, also the
          actions is a fragment containing a number of Buttons components.
        </Typography>
        <Example>
          <Dialog
            open={open2}
            onClose={({ action }) => {
              setOpen2(false);
              setSelected(action);
            }}
            title={(<em>Pick the best Darth!</em>)}
            body={(
              <p>
                There is a
                {' '}
                <strong>more</strong>
                {' '}
                fancy body.
              </p>
            )}
            actions={(
              <Fragment>
                <Button
                  className="mdc-dialog__button"
                  data-mdc-dialog-action="first"
                >
                  First
                </Button>
                <Button
                  secondary
                  className="mdc-dialog__button"
                  data-mdc-dialog-action="second"
                >
                  Second
                </Button>
              </Fragment>
            )}
          />

          <p>
            <Button onClick={() => setOpen2(true)}>Open</Button>
          </p>

          <Typography component="p">
            <span>{selected && selected !== 'close' && `You selected: ${selected}`}</span>
          </Typography>
        </Example>
      </section>

      <section>
        <SectionTitle>Something More Fun</SectionTitle>
        <Typography component="p">
          An example of a more media rich body prop.
        </Typography>
        <Example>
          <Dialog
            open={rollOpen}
            onClose={() => setRollOpen(false)}
            title="Never going to give you up!"
            body={(
              <img
                src="https://media.giphy.com/media/lW9XPLjNXyDDO/giphy.gif"
                alt="rick roll"
              />
            )}
            actions={['Goodbye']}
          />

          <p>
            <Button onClick={() => setRollOpen(true)}>Open</Button>
          </p>
        </Example>
      </section>
    </Fragment>
  );
};

export default DialogPage;
