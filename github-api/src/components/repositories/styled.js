import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
`
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 0.25rem;
  display: flex;
  margin: 0;
`

WrapperTabList.tabsRole = 'TabList'

export const WrapperTab = styled(Tab)`
  border-radius: 1rem;
  border: 0.0625rem solid #ccc;
  padding: 1rem;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: '#fff';
  margin: 0.5rem;

  &:focus {
    outline: none;
  }

  &.is-selected {
    /* border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0.0625rem solid white; */
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.2);
  }
`

WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  padding: 1rem;
  border: 0.0625rem solid '#ccc';
  display: none;
  margin-top: -0.3125rem;

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
