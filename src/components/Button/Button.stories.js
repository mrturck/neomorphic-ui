import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Button from '.';
import heart from './heart.png'
import like from './like.png'
import Typography from '../Typography';

export default {
  title: 'Button',
  decorators: [withKnobs, (story) => (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#ccd2ed',
      padding: 50,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () =>  (
  <div>
    <Button style={{ margin: 24, display: 'block' }} >Flat Rounded</Button>
    <Button style={{ margin: 24, display: 'block' }} >
      <Typography style={{fontSize: 18}}>Inset Rounded</Typography>
      </Button>
    <Button style={{ margin: 24, display: 'inline' }}>
      <img src={heart} />
    </Button>
    <Button style={{ margin: 24,display: 'inline' }}>
      <img style={{height: 60, width: 60}} src={like} />
    </Button>
    <Button style={{ margin: 24, display: 'block' }} flat>
    <Typography style={{fontSize: 24}}>Inset Flat</Typography>
    </Button>

  </div>
)
