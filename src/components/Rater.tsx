import { HStack } from "@chakra-ui/react";
import { type FC, useMemo, type ReactNode } from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'

interface Props {
    starsNumber?: number;
    maxRate?: number;
    rate: number;
}

function getStars(stars: number, isFilled: boolean): ReactNode[] {
    return Array.from({ length: stars }, () => isFilled ? <FaStar key={getUniqueKey()} /> :
        <FaRegStar key={getUniqueKey()} />)
}

function getUniqueKey(): number {
    return Math.random();
}

const Rater: FC<Props> = ({ starsNumber = 5, maxRate = 5, rate }) => {
    const { filledStars, halfFilledStar, emptyStars } = useMemo(
        () => getStarsDistribution(),
        [starsNumber, maxRate, rate]
    );

    function getStarsDistribution(): {
        filledStars: number;
        halfFilledStar: boolean;
        emptyStars: number;
    } {
        let filledStars = Math.trunc((starsNumber * rate) / maxRate);
        let halfFilledStar = false;
        const fractionalPart = filledStars - Math.trunc(filledStars);
        if (fractionalPart > 0.75) {
            filledStars++;
        } else if (fractionalPart > 0.25) {
            halfFilledStar = true;
        }
        const emptyStars = starsNumber - filledStars;
        return { filledStars, halfFilledStar, emptyStars };
    }

    return <HStack>
        {getStars(filledStars, true)}
        {halfFilledStar && <FaStarHalfAlt></FaStarHalfAlt>}
        {getStars(emptyStars, false)}
    </HStack>;
};

export default Rater;