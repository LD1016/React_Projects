import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React',
    content: 'React is a frontend Javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components.',
  },
];

const options = [
  {
    label: 'The color of Red',
    value: 'red',
  },
  {
    label: 'The color of Blue',
    value: 'blue',
  },
  {
    label: 'A shade of green',
    value: 'green',
  },
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  // return (
  //   <div>
  //     <button onClick={() => setShowDropdown(!showDropdown)}>
  //       Toggle Dropdown
  //     </button>
  //     {showDropdown ? (
  //       <div>
  //         <Dropdown
  //           label="Select a color"
  //           selected={selected}
  //           onSelectedChange={setSelected}
  //           options={options}
  //         />
  //       </div>
  //     ) : null}
  //   </div>
  // );
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}
