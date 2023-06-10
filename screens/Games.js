import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export default function Games() {
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);

    const getRecentArticle = () => {
        setLoading(true);

        let recent = "https://videogames-news2.p.rapidapi.com/videogames_news/recent";
        let popular = "https://videogames-news2.p.rapidapi.com/videogames_news/search_news";

        const requestRecent = axios.get(recent, {
            headers: {
                "X-RapidAPI-Key": "c521c65fb4msh466513ef3ffc3b2p1bb15ajsn577620e5ea7f",
                "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
            },
        });
        const requestPopular = axios.get(popular, {
            params: { query: 'Gaming', sort_by: 'relevancy' },
            headers: {
                'X-RapidAPI-Key': 'c521c65fb4msh466513ef3ffc3b2p1bb15ajsn577620e5ea7f',
                'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
            },
        });
        axios.all([requestRecent, requestPopular])
            .then(axios.spread((...responses) => {
                if (responses[0].status === 200) {
                    setSearchResult(responses[0].data);
                }
                if (responses[1].status === 200) {
                    setSearchResult(responses[1].data);
                }
            }))
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getRecentArticle();
    }, []);
    const handleSearch = () => {
        setLoading(true);

        let searchUrl = "https://videogames-news2.p.rapidapi.com/videogames_news/search_news";

        axios
            .get(searchUrl, {
                params: { query: searchQuery, sort_by: 'relevancy' },
                headers: {
                    'X-RapidAPI-Key': 'c521c65fb4msh466513ef3ffc3b2p1bb15ajsn577620e5ea7f',
                    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com',
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        setSearchResult(response.data);
                        setShowNoResults(false);
                    } else {
                        setShowNoResults(true);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const renderNewsItem = ({ item }) => (
        <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text style={styles.resultDescription}>{item.description}</Text>
            {item.image && (
                <Image source={{ uri: item.image }} style={styles.resultImage} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pretraži novosti..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Pretraži</Text>
                </TouchableOpacity>
            </View>


            {loading ? (
                <ActivityIndicator style={styles.loadingIndicator} size="large" color="#430b63" />
            ) : (
                <View style={styles.resultsContainer}>
                    {searchResult.length > 0 ? (
                        <FlatList
                            data={searchResult}
                            renderItem={renderNewsItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    ) : showNoResults ? (
                        <Text style={styles.noResultsText}>Nema rezultata pretraživanja.</Text>
                    ) : null}
                </View>
            )}
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchButton: {
        marginLeft: 10,
        backgroundColor: '#430b63',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    searchButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    loadingIndicator: {
        marginTop: 20,
    },
    resultsContainer: {
        marginTop: 10,
        justifyContent: 'center',
    },
    resultItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        alignItems: 'center',
    },
    resultTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    resultDescription: {
        marginTop: 5,
        fontSize: 14,
    },
    noResultsText: {
        marginTop: 10,
        textAlign: 'center',
    },
    resultImage: {
        marginTop: 10,
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
    },
};
{/*<View style={styles.container}>
            <ScrollView >
                <View>
                    <TouchableOpacity
                        onPress={() => ModalOpen(true)}
                    >
                        <View style={styles.section}>
                            <View style={styles.center}>
                                <Text style={styles.title}>FAKE NEWS FAKE NEWS FAKE NEWS</Text>
                                <Text style={styles.date}>2023-03-22</Text>
                                <Image
                                    source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType="fade"
                        visible={showModal}
                        nRequestClose={() => ModalOpen(false)}
                    >
                        <ArticleModal
                            ModalOpen={ModalOpen}
                        />
                    </Modal> 
                </View>
            </ScrollView>
    </View>*/}