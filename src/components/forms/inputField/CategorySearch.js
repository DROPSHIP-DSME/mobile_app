import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { Colors } from '../../../common'

const CategorySearch = (props) => {

    const {
        title,
        textStyle,
        theme,
        disable,
        placeholder,
        onSelectBusinessType,
        defaultValue,
        setScrollingState
    } = props;

    const [businessCategories, setBusinessCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [selectedValue, setSelectedValue] = useState();
    const [searchQuery, setSearchQuery] = useState(defaultValue?.businessType || "");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setSearchData()
    }, [props?.categorySearchResult]);

    useEffect(() => {
        setFilteredCategories([])
    }, [])

    useEffect(() => {
        setSearchQuery(defaultValue?.businessType);
    }, [defaultValue?.businessType])

    const setSearchData = () => {
        if (props?.categorySearchResult && props?.categorySearchResult !== null) {
            if(setScrollingState) setScrollingState(false)
            setFilteredCategories(props?.categorySearchResult || []);
            setBusinessCategories(props?.categorySearchResult || [])
        }
        setIsLoading(false)
    }

    const findBusinessType = (query) => {
        setSearchQuery(query)
        if (query) {
            setIsLoading(true)
            props.searchCategory(query)
            setTimeout(() => {
                setIsLoading(false)
            }, 5000);
        } else {
            setFilteredCategories([]);
            setIsLoading(false)
        }
    };

    const onSelection = (item) => {
        if(setScrollingState) setScrollingState(true)
        setSearchQuery(item.businessType);
        setSelectedValue(item);
        setFilteredCategories([]);
        setIsLoading(false)
        if (onSelectBusinessType) {
            onSelectBusinessType(item?._id)
        }
    }

    return (
        <>
            <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
                <Text style={[styles.title, { color: theme === "white" ? Colors.BLACK : Colors.WHITE }, textStyle]}>{title}</Text>
            </View>
            <View style={styles.searchAutocompleteContainer}>
                <View style={styles.categoryTextField}>
                    <View style={[styles.inputContainer,
                    {
                        backgroundColor: theme === "white" ? Colors.WHITE : Colors.LIGHT_BLACK,
                        borderColor: Colors.GREY,
                        borderWidth: theme === "white" ? 1 : 0,
                    }]}>
                        <TextInput
                            value={searchQuery}
                            onChangeText={(text) => findBusinessType(text)}
                            autoCapitalize="none"
                            placeholder={placeholder}
                            onSubmitEditing={() => setFilteredCategories([])}
                            onBlur={()=>setScrollingState(true)}
                            style={[styles.input, { color: theme === "white" ? disable ? Colors.GREY : Colors.BLACK : Colors.WHITE }]}
                        />
                        {isLoading && <ActivityIndicator size="small" color={Colors.BLUE} style={{ position: 'relative', right: 10 }} />}
                    </View>
                    {/** display category list */}
                    {filteredCategories?.length > 0 && (
                        <View style={styles.categoryListContainer}>
                            <FlatList
                                style={styles.categoryFlatList}
                                data={filteredCategories}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.categoryListButton}
                                            onPress={() => onSelection(item)}>
                                            <Text style={styles.categoryListButtonText}>{item.businessType}</Text>
                                        </TouchableOpacity>
                                    );
                                }}
                                keyExtractor={(item) => item._id}
                                extraData={isLoading}
                            />
                        </View>
                    )}
                </View>
            </View>
        </>
    );
};

const mapStateToProps = (state) => ({
    categorySearchLoader: state.vendor.categorySearchLoader,
    categorySearchResult: state.vendor.categorySearchResult,
});

const mapDispatchToProps = {
    searchCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorySearch);


