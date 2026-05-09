import { DuplicateCheckInput } from '@/components/auth/DuplicateCheckInput';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Checkbox } from '@/components/CheckBox';
import { Hint } from '@/components/fields/Hint';
import { Label } from '@/components/fields/Label';
import { Logo } from '@/components/Logo';
import { PageLayout } from '@/components/PageLayout';
import { Text } from '@/components/Text';
import { useForm } from '@tanstack/react-form';
import { Pressable, ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { z } from 'zod';

export default function Signup() {
  const schema = z.object({
    email: z.email('올바른 이메일을 입력해주세요'),
    nickname: z.string().min(1, '닉네임을 입력해주세요'),
    password: z.string().min(8, '8자 이상 입력해주세요'),
    passwordConfirm: z.string().min(8, '8자 이상 입력해주세요'),
    termAgree: z.boolean().refine((val) => val === true, '약관에 동의해주세요'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      termAgree: false,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <PageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.logo}>
          <Logo variant="lg" />
        </View>
        <View style={styles.fields}>
          <form.Field
            name="email"
            validators={{ onChange: schema.shape.email }}
          >
            {(field) => (
              <View>
                <Label required>이메일</Label>
                <DuplicateCheckInput
                  field={field}
                  placeholder="이메일을 입력해주세요"
                  onButtonPress={() => {}}
                />
                <Hint field={field} />
              </View>
            )}
          </form.Field>
          <form.Field
            name="nickname"
            validators={{ onChange: schema.shape.nickname }}
          >
            {(field) => (
              <View>
                <Label required>닉네임</Label>
                <DuplicateCheckInput
                  field={field}
                  placeholder="닉네임을 입력해주세요"
                  onButtonPress={() => {}}
                />
                <Hint field={field} />
              </View>
            )}
          </form.Field>
          <form.Field
            name="password"
            validators={{ onChange: schema.shape.password }}
          >
            {(field) => (
              <View>
                <Label required>비밀번호</Label>
                <PasswordInput
                  field={field}
                  placeholder="비밀번호를 입력해주세요"
                />
                <Hint field={field} />
              </View>
            )}
          </form.Field>
          <form.Field
            name="passwordConfirm"
            validators={{ onChange: schema.shape.passwordConfirm }}
          >
            {(field) => (
              <View>
                <Label required>비밀번호 확인</Label>
                <PasswordInput
                  field={field}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
                <Hint field={field} />
              </View>
            )}
          </form.Field>
        </View>
        <View style={styles.term}>
          <form.Field
            name="termAgree"
            validators={{ onChange: schema.shape.termAgree }}
          >
            {(field) => (
              <View style={styles.termField}>
                <Checkbox
                  isChecked={field.state.value}
                  onPress={() => field.handleChange(!field.state.value)}
                  title={'서비스 이용약관에 동의합니다'}
                />
                <Hint field={field} />
              </View>
            )}
          </form.Field>
          <Pressable>
            <Text variant="text-sm-medium" style={styles.termShowButtonText}>
              보기
            </Text>
          </Pressable>
        </View>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Pressable
              onPress={form.handleSubmit}
              style={styles.submitButton}
              disabled={!canSubmit}
            >
              <Text variant="text-md-bold" style={styles.submitText}>
                {!isSubmitting ? '회원가입 하기' : '...'}
              </Text>
            </Pressable>
          )}
        />
      </ScrollView>
    </PageLayout>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 16,
  },
  logo: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  fields: {
    gap: 16,
    paddingBottom: 32,
  },
  term: {
    flexDirection: 'row',
  },
  termField: {
    paddingBottom: 16,
    flex: 1,
  },
  termText: {
    color: theme.colors['gray-700'],
    flex: 1,
  },
  termShowButtonText: {
    color: theme.colors['gray-500'],
    textDecorationLine: 'underline',
  },
  submitButton: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors['gray-400'],
    borderRadius: 16,
  },
  submitText: {
    color: theme.colors['mono-white'],
  },
}));
