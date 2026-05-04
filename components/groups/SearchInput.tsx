import { useRouter } from 'expo-router';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';

interface Props extends TextInputProps {
  searchParam: string;
}

export const SearchInput = ({ searchParam, ...props }: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState(searchParam ?? '');

  const debouncedSetParams = useCallback(
    debounce((t: string) => {
      router.setParams({ search: t });
    }, 300),
    [],
  );

  useEffect(() => {
    setSearch(searchParam ?? '');
  }, [searchParam]);

  const handleSearchChange = (t: string) => {
    setSearch(t);
    debouncedSetParams(t);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="원하는 모임을 검색해보세요"
          style={styles.textInput}
          onChangeText={(t) => handleSearchChange(t)}
          value={search}
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
