import { motion } from "framer-motion";
import styled from "styled-components";

export const SideBarWrapper = styled(motion.div)`
position:absolute;
top:0;
width:220px;
font-size:20px;
padding:10px;
background:#282c34;
box-shadow:0px 0px 15px black;
    

`
export const ScrollBar = styled.div`
height:calc(100vh - 20px);
overflow-x:hidden;

`