function Wrapper(props) {
  return (
    <div
      style={{
        border: '2px dashed blue',
        padding: '10px',
        margin: '10px'
      }}
    >
      {props.children}
    </div>
  );
}
