import React from 'react'
import BasicLayout from '../layouts/BasicLayout'
import { Button, Input } from 'semantic-ui-react'

const Home = () => {
  return (
    <BasicLayout>
      <Button primary>Main</Button>
      <Button secondary>Secondary</Button>
      <Input
        placeholder='Your Name'
      ></Input>
    </BasicLayout>
  );
}
 
export default Home;