import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Conversation = {
  id: string;
  name: string;
  lastMessage?: string;
  time?: string;
  unread?: number;
};

export default function ChatScreen({
  conversation,
  onBack,
}: {
  conversation?: Conversation;
  onBack?: () => void;
}) {
  const online = conversation?.id === '1'; // mock online state for demo; replace with real presence
  const getInitials = (name?: string) =>
    (name || '')
      .split(' ')
      .map(p => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 98 : 0}
    >
      <SafeAreaView style={styles.safe}>
      <View style={[styles.header, styles.headerRowSpace]}>
        <View style={styles.headerLeft}>
          {onBack ? (
            <TouchableOpacity onPress={onBack} style={styles.backBtn} accessibilityLabel="Back to chats">
              <Text style={styles.backText}>‹</Text>
            </TouchableOpacity>
          ) : null}

          {/* Profile area */}
          <View style={styles.profileRow}>
            {conversation && (conversation as any).avatar ? (
              <Image source={{ uri: (conversation as any).avatar }} style={styles.profileImage} />
            ) : (
              <View style={styles.profilePlaceholder}>
                <Text style={styles.profilePlaceholderText}>{getInitials(conversation?.name)}</Text>
              </View>
            )}
            <View style={styles.profileText}>
              <Text style={styles.headerTitle}>{conversation?.name ?? 'Chat'}</Text>
              <View style={styles.statusRow}>
                <View style={[styles.statusDot, online ? styles.onlineDot : styles.offlineDot]} />
                <Text style={styles.statusText}>{online ? 'Online' : 'Offline'}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action buttons */}
        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn} accessibilityLabel="Call">
              <Ionicons name="call" size={20} color="#909090" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn} accessibilityLabel="More options">
              <Ionicons name="ellipsis-vertical" size={22} color="#888" />
            </TouchableOpacity>
        </View>
      </View>
  <ScrollView contentContainerStyle={styles.messages} keyboardShouldPersistTaps="handled">
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <Text>Hey there! How's your week going?</Text>
        </View>
        <View style={[styles.bubble, styles.bubbleRight]}>
          <Text style={{ color: '#fff' }}>Hi! It's going well, thanks. Just finished a big project.</Text>
        </View>
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <Text>That's awesome! Want to grab coffee this weekend to celebrate?</Text>
        </View>
      </ScrollView>

  <View style={styles.composer}>
        <TouchableOpacity
          style={styles.attachBtn}
          accessibilityLabel="Attach file"
          onPress={() => {
            // TODO: open image/file picker (e.g. Expo ImagePicker or react-native-image-picker)
            console.log('Attach button pressed');
          }}
        >
          <Ionicons name="add" size={22} color="#007AFF" />
        </TouchableOpacity>
        <TextInput
          placeholder="Type your message..."
          placeholderTextColor='#888'
          style={styles.input}
          multiline={true}
        />
        <TouchableOpacity style={styles.sendBtn} accessibilityLabel="Send message">
          <Ionicons name="send" size={18} color="#fff"/>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  headerRowSpace: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  backBtn: { paddingHorizontal: 8, paddingVertical: 4, marginRight: 6 },
  backText: { fontSize: 26, color: '#007AFF' },
  headerTitle: { fontSize: 18, fontWeight: '600' },

  /* profile */
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  profilePlaceholderText: { color: '#fff', fontWeight: '600' },
  profileText: { justifyContent: 'center' },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  onlineDot: { backgroundColor: '#4CD964' },
  offlineDot: { backgroundColor: '#C4C4C4' },
  statusText: { fontSize: 12, color: '#666' },

  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { paddingHorizontal: 8, marginLeft: 6 },
  iconText: { fontSize: 18 },
  messages: { padding: 12 },
  attachBtn: { paddingHorizontal: 8, paddingVertical: 6, marginRight: 8 },
  bubble: { padding: 12, borderRadius: 12, marginBottom: 8, maxWidth: '80%' },
  bubbleLeft: { backgroundColor: '#f1f1f1', alignSelf: 'flex-start' },
  bubbleRight: { backgroundColor: '#b71c1c', alignSelf: 'flex-end' },
  composer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#eee', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8 },
  sendBtn: { backgroundColor: '#b71c1c', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 20 },
});
