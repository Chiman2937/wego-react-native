import { TextInput, TextInputProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';

interface Props extends TextInputProps {}

export const SearchInput = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="원하는 모임을 검색해보세요"
          style={styles.textInput}
          {...props}
        />
        <Icon id="search" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors['mono-white'],
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: theme.colors['gray-100'],
    paddingVertical: 12,
    paddingRight: 48,
    paddingLeft: 16,
    borderRadius: 999,
    flex: 1,
    height: 44,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 16,
  },
}));
