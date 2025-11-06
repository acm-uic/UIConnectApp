import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Find Your Campus Connection</Text>
        <Text style={styles.lead} numberOfLines={3}>
          UIC Connect helps you meet peers who share your passions. Swipe, match, and chat with your way to new friendships and collaborations right here on campus.
        </Text>

        <View style={styles.heroCard}>
          <View style={styles.avatarPlaceholder} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardName}>Sophia, 21</Text>
            <Text style={styles.cardLocation}>Chicago</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate('two')}>
          <Text style={styles.ctaText}>Discover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: '700', marginBottom: 8 },
  lead: { fontSize: 14, color: '#444', marginBottom: 16 },
  heroCard: { flexDirection: 'row', padding: 12, backgroundColor: '#fafafa', borderRadius: 12, alignItems: 'center', marginBottom: 18 },
  avatarPlaceholder: { width: 88, height: 88, borderRadius: 10, backgroundColor: '#e6e6e6', marginRight: 12 },
  cardName: { fontSize: 18, fontWeight: '600' },
  cardLocation: { fontSize: 12, color: '#666' },
  cta: { backgroundColor: '#b71c1c', paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  ctaText: { color: '#fff', fontWeight: '600' },
});
