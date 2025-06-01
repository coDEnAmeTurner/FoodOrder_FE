import {Text} from 'react-native'

const NameText = ({numberOfLines, style, name, onPress})=>{

    return (
        <Text
          numberOfLines={numberOfLines}
          style={style}
          onPress={onPress}
        >
          {name}
        </Text>
    )
}

export default NameText;