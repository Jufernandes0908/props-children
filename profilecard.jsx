function ProfileCard(props) {
  return (
    <div>
      <img src={props.imagemUrl} alt={props.nome} />
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
    </div>
  );
}