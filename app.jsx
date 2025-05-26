function App() {
  return (
    <div>
      <SaudacaoUsuario nome="Julia" />
      <SaudacaoUsuario nome="Turma 9" />

      <Wrapper><ProfileCard 
        nome="Maria Clara" 
        imagemUrl="https://via.placeholder.com/100" 
        descricao="Desenvolvedora Front-end apaixonada por React." 
      /></Wrapper>

      <ProfileCard 
        nome="Julia" 
        imagemUrl="https://via.placeholder.com/100" 
        descricao="Desenvolvedor Front-end apaixonado por React." 
      />

       <Wrapper>
        <p>Texto simples dentro do wrapper.</p>
      </Wrapper>
      
    </div>
  );
}
