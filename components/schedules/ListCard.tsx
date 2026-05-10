import { Group } from '@/api/types/groups';
import dayjs from 'dayjs';
import { Image } from 'expo-image';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Button } from '../Button';

interface Props {
  group: Group;
}

export const ListCard = ({ group }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image source={group.thumbnail} style={styles.groupImage} />
        <View style={styles.groupContent}>
          <Text
            variant="text-md-semibold"
            style={styles.groupTitle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {group.title}
          </Text>
          <View style={styles.tags}>
            {group.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text variant="text-2xs-medium" style={styles.tagText}>
                  {`#${tag}`}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.meta}>
            <Icon id="map-pin-5" />
            <Text
              style={styles.metaText}
              variant="text-xs-regular"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {group.address}
            </Text>
          </View>
          <View style={styles.meta}>
            <Icon id="calendar-4" />
            <Text style={styles.metaText} variant="text-xs-regular">
              {dayjs(group.startedAt).tz().format('YY. MM. DD - HH:mm')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.profile}>
          <Image
            source={group.createdBy.profileImage}
            style={styles.profileImage}
          />
          <Text style={styles.profileNickname} variant="text-xs-medium">
            {group.createdBy.nickname}
          </Text>
        </View>
        <View style={styles.participants}>
          <Icon id="user-2" />
          <View style={styles.progressBackground}>
            <View
              style={[
                styles.progressActive,
                {
                  width: `${(group.joinedParticipants / group.maxParticipants) * 100}%`,
                },
              ]}
            ></View>
          </View>
          <Text
            variant="text-xs-semibold"
            style={styles.participantsStatus}
          >{`${group.joinedParticipants}/${group.maxParticipants}`}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="모임 탈퇴" variant="tertiary" size="sm" />
        <Button title="채팅 입장" variant="primary" size="sm" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: 24,
    backgroundColor: theme.colors['mono-white'],
    padding: 16,
    gap: 12,
  },
  group: {
    flexDirection: 'row',
    gap: 16,
  },
  groupImage: {
    aspectRatio: 1,
    width: 100,
    borderRadius: 16,
  },
  groupContent: {
    flex: 1,
  },
  groupTitle: {
    color: theme.colors['gray-800'],
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: theme.colors['mint-100'],
  },
  tagText: {
    color: theme.colors['mint-700'],
  },
  meta: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  metaText: {
    color: theme.colors['gray-700'],
    flexShrink: 1,
  },
  footer: {
    flexDirection: 'row',
    gap: 16,
  },
  profile: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    width: 100,
  },
  profileImage: {
    aspectRatio: 1,
    width: 16,
    borderRadius: 999,
  },
  profileNickname: {
    color: theme.colors['gray-800'],
  },
  participants: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  progressBackground: {
    backgroundColor: theme.colors['gray-200'],
    borderRadius: 999,
    flex: 1,
    height: 6,
  },
  progressActive: {
    backgroundColor: theme.colors['mint-500'],
    height: 6,
    borderRadius: 999,
  },
  participantsStatus: {
    color: theme.colors['mint-500'],
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
}));
