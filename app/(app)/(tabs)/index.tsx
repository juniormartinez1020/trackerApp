import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Home() {

  const [search, setSearch] = useState('')

  const performSearch = () => {
    console.warn('search')

    // save this search in database

    // srape amazon for this query
    router.push('/search')
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Search' }} />
      

    <View className='flex-row gap-3 p-3'>
      <TextInput
      value={search}
      onChangeText={setSearch}
      placeholder='search for product'
      className='flex-1 m-3 rounded p-3 border border-gray-300
      bg-slate-50'
      />

      <Pressable 
      onPress={performSearch}
      className='rounded bg-teal-500 p-3'
      >
        <Text>Search</Text>
      </Pressable>
    </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
