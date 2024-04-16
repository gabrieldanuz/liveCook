import { FlatList, ScrollView } from 'react-native'
import { styles } from './styles'
import { Ingredient } from '../Ingredient'

export function Ingredients() {
  return (
    <ScrollView style={styles.container}>
      <Ingredient />
    </ScrollView>
  )
}
