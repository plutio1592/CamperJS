import styled from "styled-components";
import { MdPets} from "react-icons/md";
import { FaMountain,FaCarSide,FaCaravan} from "react-icons/fa";
import { TbBeach } from "react-icons/tb";
import {GiCaravan,GiCampingTent,GiGrass,GiStonePath,GiWoodBeam,GiEarthSpit,GiForest} from "react-icons/gi"

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


function Tags({onTag}) {
    const onClickTagMount = () => {
        onTag("산")      
    }
    const onClickTagValley = () => {
        onTag("계곡")      
    }
    const onClickTagForest = () => {
        onTag("숲")      
    }
    const onClickTagautoSiteCo = () => {
        onTag("autoSiteCo")      
    }
    const onClickTagglampSiteCo = () => {
        onTag("glampSiteCo")      
    }    
    const onClickTagcaravSiteCo = () => {
        onTag("caravSiteCo")      
    }    
    const onClickTagindvdlCaravSiteCo = () => {
        onTag("indvdlCaravSiteCo")      
    }    
    const onClickTagsiteBottomCl1= () => {
        onTag("siteBottomCl1")      
    }
    const onClickTagsiteBottomCl2= () => {
        onTag("siteBottomCl2")      
    }    
    const onClickTagsiteBottomCl3= () => {
        onTag("siteBottomCl3")      
    }
    const onClickTagsiteBottomCl5= () => {
        onTag("siteBottomCl5")      
    }
    const onClickTaganimalCmgCl= () => {
        onTag("animalCmgCl")      
    }


    return(
        <TagItemContainer>

                <Tag>
                    <TagButton onClick={onClickTagMount} key="산">
                        <FaMountain size={30}/>
                        <Tagname>산</Tagname>   
                    </TagButton>
                    <TagButton onClick={onClickTagValley} key="계곡">
                        <TbBeach size={30}/>
                        <Tagname>계곡</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagForest} key="숲">
                        <GiForest size={30}/>
                        <Tagname>숲</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagautoSiteCo} key="autoSiteCo">
                        <FaCarSide size={30} />
                        <Tagname>자동차야영장</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagglampSiteCo} key="glampSiteCo">
                        <GiCampingTent size={30}/>
                        <Tagname>글램핑</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagcaravSiteCo} key="caravSiteCo">
                        <GiCaravan size={30}/>
                        <Tagname>카라반</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagindvdlCaravSiteCo} key="indvdlCaravSiteCo">
                        <FaCaravan size={30}/>
                        <Tagname>개인카라반</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagsiteBottomCl1} key="siteBottomCl1">
                        <GiGrass size={30}/>
                        <Tagname>잔디</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagsiteBottomCl2} key="siteBottomCl2">
                        <GiStonePath size={30}/>
                        <Tagname>파쇄석</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagsiteBottomCl3} key="siteBottomCl3">
                        <GiWoodBeam size={30}/>
                        <Tagname>테크</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTagsiteBottomCl5} key="siteBottomCl5">
                        <GiEarthSpit size={30}/>
                        <Tagname>맨흙</Tagname>
                    </TagButton>
                    <TagButton onClick={onClickTaganimalCmgCl} key="animalCmgCl">
                        <MdPets size={30}/>
                        <Tagname>애완동물</Tagname>
                    </TagButton>
                </Tag>        

        </TagItemContainer>
    )
};

export default Tags;