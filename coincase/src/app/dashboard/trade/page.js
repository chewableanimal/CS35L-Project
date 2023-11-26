/** @format */

"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function trade() {
  return (
    <>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
          <Tab>Send</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );

  
}
