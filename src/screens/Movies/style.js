import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding-vertical: 20px;
`;

export const WrapperHeader = styled.View`
  width: 100%;
  padding: 20px;
  background-color: #3C3C3C;
`;

export const TitleText = styled.Text`
  text-align: center;
  color: #f2f2f2;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
`;

export const WrapperCategories = styled.ScrollView`
  width: 100%;
  height: 70px;
  padding: 1%;
`;

export const WrapperCategory = styled.TouchableOpacity`
  width: auto;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background-color: #3C3C3C;
  margin-horizontal: 4px;
`;

export const TextDefault = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

export const WrapperList = styled.ScrollView`
  width: 100%;
`;

export const ItemSelector = styled.TouchableOpacity`
  margin-vertical: 2%;
  border-radius: 4px;
  background-color: #3C3C3C;
  width: 47%;
`;

export const WrapperMovie = styled.ImageBackground`
  width: 150px;
  height: 300px;
  margin: 10px;
  background-color: gray;
  resize-mode: cover;
`;

export const TitleMovie = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const WrapperDetail = styled.TouchableOpacity`
  width: 100%;
  height: 320px;
  border-radius: 4px;
  flex-direction: row;
  display: flex;
  margin-vertical: 2%;
  border-radius: 4px;
  background-color: #3C3C3C;
`;

export const WrapperImage = styled.ImageBackground`
  width: 50%;
  height: 300px;
  margin: 10px;
  background-color: gray;
  resize-mode: cover;
  flex: 5
`;

export const WrapperInfo = styled.View`
  width: 50%;
  height: 300px;
  flex: 5;
  padding: 20px;
`;

export const TextDetail = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: justify
`;
