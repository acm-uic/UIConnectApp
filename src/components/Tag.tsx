import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tag({ children }: any) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, backgroundColor: '#f5f5f5', margin: 4 },
  text: { fontSize: 13, color: '#333' },
});
