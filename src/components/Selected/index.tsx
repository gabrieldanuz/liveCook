import { View, Text } from 'react-native'
import Animated, { SlideInDown, BounceInDown } from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '@/theme'

type Props = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceInDown.duration(500)}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>
    </Animated.View>
  )
}
