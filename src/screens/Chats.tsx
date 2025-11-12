import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ChatScreen from './Chat';

const conversations = [
  {
    id: '1',
    name: 'Alex Johnson',
    lastMessage: 'Hey, are we still on for tonight?',
    time: '2:14 PM',
    unread: 2,
  },
  {
    id: '2',
    name: 'Taylor Smith',
    lastMessage: "Thanks for the notes — I'll read through them.",
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: '3',
    name: 'Jordan Lee',
    lastMessage: 'Sent you the files.',
    time: 'Mon',
    unread: 1,
  },
  {
    id: '4',
    name: 'Casey Nguyen',
    lastMessage: 'Lol that was hilarious 😂',
    time: 'Nov 5',
    unread: 0,
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function ConversationItem({ item, onPress }: { item: typeof conversations[number]; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
      </View>
      <View style={styles.itemContent}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
            {item.lastMessage}
          </Text>
          {item.unread > 0 ? (
            <View style={styles.unread}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ChatsScreen() {
  const [selectedConversation, setSelectedConversation] = useState<null | typeof conversations[number]>(null);

  if (selectedConversation) {
    return (
      <ChatScreen
        conversation={selectedConversation}
        onBack={() => setSelectedConversation(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      {/* <View style={styles.header}>
      <Text style={styles.headerTitle}>Chats</Text>
      </View> Removed second Chats */}

      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ConversationItem item={item} onPress={() => setSelectedConversation(item)} />
        )}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No messages</Text>
            <Text style={styles.emptySubtitle}>Start a new chat to see messages here.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  list: { paddingVertical: 8 },
  item: { flexDirection: 'row', padding: 12, alignItems: 'center' },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#fff', fontWeight: '600' },
  itemContent: { flex: 1, justifyContent: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '600' },
  time: { fontSize: 12, color: '#888' },
  message: { flex: 1, color: '#666', marginTop: 4, marginRight: 8 },
  unread: {
    backgroundColor: '#FF3B30',
    minWidth: 20,
    paddingHorizontal: 6,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  separator: { height: 1, backgroundColor: '#f2f2f2', marginLeft: 72 },
  empty: { padding: 20, alignItems: 'center' },
  emptyTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  emptySubtitle: { color: '#666' },
});