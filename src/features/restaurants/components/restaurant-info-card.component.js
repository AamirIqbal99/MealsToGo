import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.ui.primary};
    padding: 5px;
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
    padding: ${(props => props.theme.space[3])};
`;

const Rating = styled(View)`
    flex-direction: row;
    padding: ${(props) => props.theme.space[0]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
        address = "101 Some Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover key={ name } source={{ uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg" }} />
            <Info>
                <Section>
                    <Rating>
                        {
                            ratingArray.map(() => (<SvgXml xml={star} width={20} height={20} />))
                        }
                    </Rating>
                    <SectionEnd>
                        { isClosedTemporarily && (
                            <Text variant="label" style={{color: 'maroon'}} >CLOSED TEMPORARILY</Text>
                        )}
                        
                        <Spacer position="left" size="left" />

                        { isOpenNow && (<SvgXml xml={open} width={20} height={20} />) }

                        <Spacer position="left" size="left" />

                        <Image style={{width: 15, height: 15}} source={{uri: icon}} />
                    </SectionEnd>
                </Section>
                <Title>{ name }</Title>
                <Address>{ address }</Address>
            </Info>
        </RestaurantCard>
    );
};