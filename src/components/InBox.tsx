import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InBoxHeader from './InBoxHeader';
import InBoxEmail from './InBoxEmail';
import { emails } from '../samplaeData';
import { useState } from 'react';

const InBox = () => {
  const [emailList, setEmailList] = useState(emails);
  console.log(emails);

  return (
    <Grid item xs={8}>
      <InBoxHeader />
      {emailList.map((message) => (
        <InBoxEmail from={message.from} subject={message.subject} />
      ))}
    </Grid>
  );
};

export default InBox;
