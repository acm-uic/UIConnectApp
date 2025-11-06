import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MatchDetailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.photoPlaceholder} />
      <Text style={styles.name}>Sophia, 21</Text>

      <Text style={styles.sectionTitle}>Academic Information</Text>
      <View style={styles.field}><Text>College Major: Computer Science</Text></View>
      <View style={styles.field}><Text>Expected Graduation Year: 2025</Text></View>

      <Text style={styles.sectionTitle}>UIC Interests</Text>
      <View style={styles.pillsRow}>
        <View style={styles.pill}><Text>Campus Events</Text></View>
        <View style={styles.pill}><Text>Student Organizations</Text></View>
        <View style={styles.pill}><Text>Study Groups</Text></View>
      </View>

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.paragraph}>Tell us a little about yourself, your hobbies, or what you're looking for in UIC Connect.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  photoPlaceholder: { height: 320, backgroundColor: '#e6e6e6', borderRadius: 12, marginBottom: 12 },
  name: { fontSize: 28, fontWeight: '600', marginBottom: 12 },
  sectionTitle: { fontSize: 16, marginTop: 12, marginBottom: 6, fontWeight: '600' },
  paragraph: { fontSize: 14, color: '#333' },
  field: { paddingVertical: 8 },
  pillsRow: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  pill: { backgroundColor: '#f1f1f1', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, marginRight: 8, marginBottom: 8 },
});
