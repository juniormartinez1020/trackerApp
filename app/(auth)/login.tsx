import { router, Stack } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "~/utils/supabase";

export default function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            Alert.alert('error create account', error.message)
        }
    }

    const onSignUp = async () => {
      const { data, error } =  await supabase.auth.signUp({
            email,
            password
        })

        console.log(error)

        if (error) {
            Alert.alert('error create account', error.message)
        }

        console.log(data)
    }

    return (
        <View
        className="gap-3 p-3"
        >

           <Stack.Screen options={{ title: 'Sign in'}} />

            <Text>Sign in</Text>

            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="email"
             className='flex-1  rounded p-7  border border-gray-300
      bg-slate-50'
            />
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="password"
            secureTextEntry
             className='flex-1  rounded p-7 border border-gray-300
      bg-slate-50'
            />


         <View className="flex-row gap-2">
            <Pressable
            onPress={onSignIn}
            className='rounded bg-teal-500 p-3 flex-1 items-center'
            >
                <Text
                className="font-bold color-indigo-50"
                >
                    Sign in
                </Text>
            </Pressable>

            <Pressable
            onPress={onSignUp}
            className='rounded bg-teal-500 p-3 flex-1 items-center'
            >
                <Text
                className="font-bold color-indigo-50"
                >
                    Sign up
                </Text>
            </Pressable>
         </View>
        </View>
    )
}