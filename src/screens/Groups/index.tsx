import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
