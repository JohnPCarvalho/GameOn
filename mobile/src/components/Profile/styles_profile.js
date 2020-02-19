import styled from 'styled-components/native';
/* Styles Profile */
export const ContainerProfile = styled.View`
    flex: auto;
    align-items: center;
    background-color: #454545;
`;
export const ViewHeaderProfile = styled.View`
    border-bottom-left-radius: 100;
    border-bottom-right-radius: 100;
    width: 100%;
    min-height: 200px;
    background-color: #303030;

`;
export const ImgProfileConfig = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 100;
    margin: 0 30px 0 30px;
`;
export const IconsProfile = styled.Image`
    width: 30px;
    height: 30px;
`;
export const ButtonProfile = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 100;
    width: 55px;
    height: 55px;
    background-color: #aaa;
`;
export const ViewConfigsProfile = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
    flex-direction: row;
`;
export const TextBoxNameProfile = styled.Text`
    color: #fff;
    font-size: 16;

`;
export const ViewTextProfile = styled.View`
    width: 100%;
    align-items: center;
    height: 40px;    
`;
export const ViewContentProfile = styled.View`
    width: 100%;
    background-color: #303030;
    height: 140px;
    margin-top: 15px;
    justify-content: center;
`;
export const TextBoxContentProfile = styled.Text`
    font-size: 20;
    color: #fff;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 10px;
`;
export const ViewGamesProfile = styled.View`
    width: 100%;
    height: 90px;
    flex-direction: row;
    padding: 5px;
    border-radius: 7;
    margin: 10px 0 10px 0;
`;
export const ImgUserProfile = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 100;
`;
export const NameUserProfile = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14;
    margin-top: 5px;
`;
export const ViewRodape = styled.View`
    width: 100%;
    height: 70px;
    bottom: 0;
    background-color: #303030;
    position: absolute;
    align-items: center;
    justify-content: center;
`;
export const TextBoxRodape = styled.Text`
    font-size: 12;
    color: #ccc;
    margin-bottom: 4px;
`;
export const ViewButtonOut = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #303030;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;
export const ButtonOut = styled.TouchableOpacity`

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 75;
`;
export const TextBoxButtonOut = styled.Text`
    font-size: 20;
    color: #ddd;
`;