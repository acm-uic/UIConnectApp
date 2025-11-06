import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Matches</Text>

      <View style={styles.card}>
        <View style={styles.photoPlaceholder} />
        <View style={styles.cardInfo}>
          <Text style={styles.name}>Sophia, 21</Text>
          <Text style={styles.location}>Chicago</Text>
          <View style={styles.tagsRow}>
            <View style={styles.tag}><Text style={styles.tagText}>Photography</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Reading</Text></View>
            <View style={styles.tag}><Text style={styles.tagText}>Hiking</Text></View>
          </View>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionBtn}><Text>✕</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.heartBtn]}><Text style={{color:'#fff'}}>♥</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, marginBottom: 12 },
  card: { borderRadius: 12, overflow: 'hidden', backgroundColor: '#fff', elevation: 1, marginBottom: 12 },
  photoPlaceholder: { height: 420, backgroundColor: '#e6e6e6' },
  cardInfo: { padding: 12 },
  name: { fontSize: 20, fontWeight: '700' },
  location: { fontSize: 12, color: '#666', marginBottom: 8 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: '#f1f1f1', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 16, marginRight: 6, marginBottom: 6 },
  tagText: { fontSize: 12 },
  actionsRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 },
  actionBtn: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', elevation: 2 },
  heartBtn: { backgroundColor: '#b71c1c' },
});
