import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileCard({ name = 'Name', age = 21, location = 'Chicago' }: any) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 12, alignItems: 'center' },
  avatar: { width: 72, height: 72, borderRadius: 8, backgroundColor: '#ddd' },
  info: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  location: { fontSize: 12, color: '#666' },
});
