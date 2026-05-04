import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.page}
      keyboardVerticalOffset={insets.top + 56}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create((theme) => ({
  page: {
    flex: 1,
  },
}));
