import { Modal, ModalProps, Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface Props extends ModalProps {
  onClose: () => void;
}

export const TermsModal = ({ onClose, ...props }: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
      {...props}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.container} onPress={(e) => e.stopPropagation()}>
          <View style={styles.titleContainer}>
            <Text variant="text-md-bold" style={styles.title}>
              서비스 이용약관
            </Text>
            <Pressable onPress={onClose}>
              <Icon id="x1" />
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create((theme) => ({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 32,
    flexDirection: 'row',
  },
  container: {
    height: 460,
    flex: 1,
    backgroundColor: theme.colors['mono-white'],
    borderRadius: 24,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: theme.colors['gray-800'],
    flex: 1,
  },
}));
