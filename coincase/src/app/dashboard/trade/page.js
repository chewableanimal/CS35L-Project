/** @format */

"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { Select } from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'

export default function trade() {
  return (
    <>
      <Stat>
        <StatLabel>Cash Balance</StatLabel>
        <StatNumber>$0.00</StatNumber>
      </Stat>

      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
          <Tab>Send</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* BUY PANEL */}
            <NumberInput defaultValue={0} min={0} max={10000}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            
            <Button colorScheme='blue'>Buy CryptoName</Button>
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
