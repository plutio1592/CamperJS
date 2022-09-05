import styled from "styled-components";
import { MdCarRental,MdPets} from "react-icons/md";
import { FaMountain,FaCarSide,FaCaravan,FaStreetView} from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import {GiCaravan,GiCampingTent,GiGrass,GiStonePath,GiWoodBeam,GiEarthSpit} from "react-icons/gi"

export const TagItemContainer = styled.div`
    border : 0px solid red;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 5% 0 5%;
`

export const Tag = styled.div`
    border : 0px solid red;
    width: 2000px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    overflow: auto;
    scroll-snap-type: x mandatory;
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

function Tags() {
    return(
        <TagItemContainer>

                <Tag>
                    <TagButton>
                        <FaMountain size={30}/>
                        <div>산</div>   
                    </TagButton>
                    <TagButton>
                        <TbBeach size={30}/>
                        <div>바다</div>
                    </TagButton>
                    <TagButton>
                        <FaCarSide size={30}/>
                        <div>자동차야영장</div>
                    </TagButton>
                    <TagButton>
                        <GiCampingTent size={30}/>
                        <div>글램핑</div>
                    </TagButton>
                    <TagButton>
                        <GiCaravan size={30}/>
                        <div>카라반</div>
                    </TagButton>
                    <TagButton>
                        <FaCaravan size={30}/>
                        <div>개인카라반</div>
                    </TagButton>
                    <TagButton>
                        <GiGrass size={30}/>
                        <div>잔디</div>
                    </TagButton>
                    <TagButton>
                        <GiStonePath size={30}/>
                        <div>파쇄석</div>
                    </TagButton>
                    <TagButton>
                        <GiWoodBeam size={30}/>
                        <div>테크</div>
                    </TagButton>
                    <TagButton>
                        <GiEarthSpit size={30}/>
                        <div>맨흙</div>
                    </TagButton>
                    <TagButton>
                        <MdCarRental size={30}/>
                        <div>캠핑장비대여</div>
                    </TagButton>
                    <TagButton>
                        <MdPets size={30}/>
                        <div>애완동물</div>
                    </TagButton>
                    <TagButton>
                        <FaStreetView size={30}/>
                        <div>부대시설</div>
                    </TagButton>
                </Tag>        

        </TagItemContainer>
    )
};

export default Tags;