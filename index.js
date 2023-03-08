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
  'Namaste React Dev 1'
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

const div = React.createElement('div', { className: 'div1' }, [
  heading,
  heading1,
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);
