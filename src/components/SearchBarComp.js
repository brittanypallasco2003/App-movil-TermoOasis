import * as React from 'react';
import { Searchbar, useTheme } from 'react-native-paper';

const SearchBarComp = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  return (
    <Searchbar
    icon={'magnify'}
    iconColor={'#fff'}
    rippleColor={theme.colors.primary}
    inputStyle={{fontFamily:'Quicksand_700Bold',color:theme.colors.primary}}
    style={{paddingHorizontal:20, paddingVertical:4,}}
      placeholder="Paciente..."
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBarComp;
