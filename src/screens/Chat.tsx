import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}><Text style={styles.headerTitle}>Chats</Text></View>
      <ScrollView contentContainerStyle={styles.messages}>
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <Text>Hey there! How's your week going?</Text>
        </View>
        <View style={[styles.bubble, styles.bubbleRight]}>
          <Text style={{ color: '#fff' }}>Hi! It's going well, thanks. Just finished a big project.</Text>
        </View>
      </ScrollView>

      <View style={styles.composer}>
        <TextInput placeholder="Type your message..." style={styles.input} />
        <TouchableOpacity style={styles.sendBtn}><Text style={{color:'#fff'}}>Send</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: '600' },
  messages: { padding: 12 },
  bubble: { padding: 12, borderRadius: 12, marginBottom: 8, maxWidth: '80%' },
  bubbleLeft: { backgroundColor: '#f1f1f1', alignSelf: 'flex-start' },
  bubbleRight: { backgroundColor: '#b71c1c', alignSelf: 'flex-end' },
  composer: { flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: '#eee', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, marginRight: 8 },
  sendBtn: { backgroundColor: '#b71c1c', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 20 },
});
