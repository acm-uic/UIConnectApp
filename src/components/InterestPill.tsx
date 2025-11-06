import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InterestPill({ label }: { label: string }) {
  return (
    <View style={styles.pill}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, backgroundColor: '#eee', margin: 4 },
  text: { fontSize: 12, color: '#333' },
});
