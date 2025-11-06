import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.avatarPlaceholder} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Sophia, 21</Text>
          <Text style={styles.location}>Chicago</Text>
        </View>
        <TouchableOpacity style={styles.editBtn}><Text style={{color:'#fff'}}>Edit</Text></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Academic Information</Text>
      <View style={styles.field}><Text>College Major: Computer Science</Text></View>
      <View style={styles.field}><Text>Expected Graduation Year: 2025</Text></View>

      <Text style={styles.sectionTitle}>UIC Interests</Text>
      <View style={styles.pillsRow}>
        <View style={styles.pill}><Text>Campus Events</Text></View>
        <View style={styles.pill}><Text>Study Groups</Text></View>
        <View style={styles.pill}><Text>Art & Culture</Text></View>
      </View>

      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.paragraph}>Tell us a little about yourself, your hobbies, or what you're looking for in UIC Connect.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatarPlaceholder: { width: 80, height: 80, borderRadius: 10, backgroundColor: '#e6e6e6', marginRight: 12 },
  name: { fontSize: 18, fontWeight: '700' },
  location: { fontSize: 12, color: '#666' },
  editBtn: { backgroundColor: '#b71c1c', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  sectionTitle: { fontSize: 16, marginTop: 12, marginBottom: 6, fontWeight: '600' },
  field: { paddingVertical: 8 },
  pillsRow: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 },
  pill: { backgroundColor: '#f1f1f1', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, marginRight: 8, marginBottom: 8 },
  paragraph: { fontSize: 14, color: '#333' },
});
