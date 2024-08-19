import { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="jogue com a sua turma" />
      {groups.length > 0 ? (
        <FlatList
          data={groups}
          keyExtractor={(group) => group}
          renderItem={({ item }) => <GroupCard title={item} />}
        />
      ) : (
        <ListEmpty message="Nenhum grupo encontrado." />
      )}
      <Button
        title="Adicionar novo grupo"
        onPress={() => setGroups([...groups, "Novo grupo"])}
      />
    </Container>
  );
}
