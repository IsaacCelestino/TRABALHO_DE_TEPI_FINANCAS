import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

import { FlatList } from 'react-native-web';

const list = [{
  id: 1,
  label: 'Boleto da Crunch',
  value: '15,99',
  date: '14/12/2023',
  type: 0 //despesas
}, {
  id: 2,
  label: 'Salário',
  value: '3500,00',
  date: '13/12/2023',
  type: 1 //entrada de dinheiro 
}, {
  id: 3,
  label: 'Conta de luz',
  value: '183,59',
  date: '15/12/2023',
  type: 0
},
]

export default function Home() {
  return (
    <View style={styles.container}>

      <Header name="GaloSincero" />
      <Balance saldo="9.250,90" gastos="-527,00" />
      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Moviments data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FaFaFa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 20,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
