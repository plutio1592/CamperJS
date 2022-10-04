import styled from "styled-components";
import { MdCarRental,MdPets} from "react-icons/md";
import { FaMountain,FaCarSide,FaCaravan,FaStreetView} from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import {GiCaravan,GiCampingTent,GiGrass,GiStonePath,GiWoodBeam,GiEarthSpit} from "react-icons/gi"

export const TagItemContainer = styled.div`
    // border : 3px solid red;

    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`

export const Tag = styled.div`
    // border : 3px solid green;
    margin : 0 5% 0 5%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    overflow-x: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`

// export const Slider= styled.div`
// border : 2px solid red;
// display: flex;

// `

export const TagButton = styled.button`
    margin : 0 0.5rem 0 0.5rem ;
    border : 0px solid green;
    background : white;
    width: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    color : gray;
    &:active{
        color : black;
    }
    
`
export const Tagname = styled.div`
 margin : 0
 border : 0px solid black;
 width : 75px
`


function Tags() {
    return(
        <TagItemContainer>

                <Tag>
                    <TagButton>
                        <FaMountain size={30}/>
                        <Tagname>산</Tagname>   
                    </TagButton>
                    <TagButton>
                        <TbBeach size={30}/>
                        <Tagname>바다</Tagname>
                    </TagButton>
                    <TagButton>
                        <FaCarSide size={30}/>
                        <Tagname>자동차야영장</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiCampingTent size={30}/>
                        <Tagname>글램핑</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiCaravan size={30}/>
                        <Tagname>카라반</Tagname>
                    </TagButton>
                    <TagButton>
                        <FaCaravan size={30}/>
                        <Tagname>개인카라반</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiGrass size={30}/>
                        <Tagname>잔디</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiStonePath size={30}/>
                        <Tagname>파쇄석</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiWoodBeam size={30}/>
                        <Tagname>테크</Tagname>
                    </TagButton>
                    <TagButton>
                        <GiEarthSpit size={30}/>
                        <Tagname>맨흙</Tagname>
                    </TagButton>
                    <TagButton>
                        <MdCarRental size={30}/>
                        <Tagname>캠핑장비대여</Tagname>
                    </TagButton>
                    <TagButton>
                        <MdPets size={30}/>
                        <Tagname>애완동물</Tagname>
                    </TagButton>
                    <TagButton>
                        <FaStreetView size={30}/>
                        <Tagname>부대시설</Tagname>
                    </TagButton>
                </Tag>        

        </TagItemContainer>
    )
};

export default Tags;