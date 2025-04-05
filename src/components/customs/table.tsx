import { motion } from "framer-motion";
import styled from "styled-components";

export const Table = styled(motion.table)`
    width: 90%;

    td, th {
        font-size: 1.1rem;
        border: 1px solid ${(props): string => props.theme.colors.semiDefault};
        padding: 5px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
`;
