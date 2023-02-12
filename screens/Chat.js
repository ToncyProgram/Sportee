import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
} from "react";

import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { database } from "../config/firebase";
import { useNavigation } from '@react-navigation/native';


import { GiftedChat, Bubble } from 'react-native-gifted-chat';


export default function Chat() {

    const auth = getAuth();
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        const collectionRef = collection(database, "chatMessages");
        const q = query(collectionRef, orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log("sent");
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            )
        });
        return unsubscribe;
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, "chatMessages"), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: auth?.currentUser?.email,
                    avatar: "https://cdn-icons-png.flaticon.com/512/552/552848.png"
                }}
                renderBubble={props => {
                    return (
                        <Bubble
                            {...props}
                            timeTextStyle={{
                                right: { color: 'white' },
                                left: { color: "white" },
                                
                            }}
                            wrapperStyle={{
                                left: {
                                    backgroundColor: '#060b30',
                                },
                                right: {
                                    backgroundColor: '#060b30',
                                }
                            }}
                            textStyle={{
                                left: {
                                    color: '#fff',
                                },
                            }}


                        />
                    );
                }}
            />
        </View>

    )
}



const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#46b0fb"
    }
})