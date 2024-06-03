import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import SearchBarComp from './SearchBarComp';
import { CitasContext } from '../context/CitasContext';
// import { AuthContext } from './path-to-auth-context'; // Asegúrate de importar tu AuthContext correctamente

const AppBarPBuscador = () => {
    // const { infoUsuariObtenida } = useContext(AuthContext);
    // const { isDoctor } = infoUsuariObtenida;
    const {searchVisible,setSearchVisible,buscarPacientes} = useContext(CitasContext)
    const [searchQuery, setSearchQuery] = useState('');
    const theme = useTheme();

    const onChangeSearch = query => {
        setSearchQuery(query);
        buscarPacientes(query);
    };

    return (
        <Appbar.Header
        style={{ backgroundColor: theme.colors.secondary }}
        elevated={true}
        >
            {searchVisible ? (
                <SearchBarComp
                searchQuery={searchQuery}
                onChangeSearch={onChangeSearch} 
                 />
            ) : (
                <>
                    <Appbar.Content title="Citas" />
                    <Appbar.Action icon="magnify" onPress={() => setSearchVisible(true)} />
                </>
            )}
        </Appbar.Header>
    );
}

export default AppBarPBuscador;
