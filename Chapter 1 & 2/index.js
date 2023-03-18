import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
  'h1',
  {
    id: 'head1',
    style: {
      color: 'white',
      backgroundColor: 'black',
    },
    className: 'hy1',
  },
  'Namaste React Dev From Parcel'
);
const heading1 = React.createElement(
  'h1',
  {
    id: 'head2',
    style: {
      color: 'white',
      backgroundColor: 'black',
    },
    className: 'hy2',
  },
  'Namaste React Dev 2'
);

const div = React.createElement(
  'div',
  { className: 'div1', hello: 'World' },
  [heading, heading1]
);

const HeadJSX = <h1>Hello react</h1>;

const data = {name:"Arup"}

const HeadJSXFunc = () => {
  return (
    <>
      <div>
        <h1>Namaste JavaScript</h1>
        {HeadJSX }  {data.name}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadJSXFunc />);
