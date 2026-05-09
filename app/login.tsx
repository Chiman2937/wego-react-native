import { Footer } from '@/components/auth/Footer';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Button } from '@/components/Button';
import { Hint } from '@/components/fields/Hint';
import { Input } from '@/components/fields/Input';
import { Label } from '@/components/fields/Label';
import { Logo } from '@/components/Logo';
import { PageLayout } from '@/components/PageLayout';
import { useForm } from '@tanstack/react-form';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { z } from 'zod';

export default function Login() {
  const router = useRouter();
  const schema = z.object({
    email: z.email('올바른 이메일을 입력해주세요'),
    password: z.string().min(8, '8자 이상 입력해주세요'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
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
                <Input
                  field={field}
                  placeholder="이메일을 입력해주세요"
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
        </View>
        <View style={styles.buttonContainer}>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                title={!isSubmitting ? '로그인하기' : '...'}
                variant="primary"
                size="md"
                disabled={!canSubmit}
                onPress={form.handleSubmit}
              />
            )}
          />
        </View>
        <View style={styles.footerContainer}>
          <Footer
            title="WEGO가 처음이신가요?"
            rightButtonText="회원가입하기"
            onPress={() => router.replace('/signup')}
          />
        </View>
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
  buttonContainer: {
    paddingBottom: 40,
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
  footerContainer: {
    alignItems: 'center',
  },
}));
